import { createContact, getAllContacts, getContactCount } from '../models/contactModel.js';
import { sendContactNotification } from '../utils/mailer.js';

/**
 * POST /api/contact
 * Submit a new contact message
 */
export async function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const contact = await createContact({ name, email, message });

    // Send email notification (non-blocking)
    sendContactNotification({ name, email, message }).catch(() => {});

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: contact.id,
        created_at: contact.created_at,
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}

/**
 * GET /api/contact
 * Fetch all contact messages (admin endpoint)
 */
export async function getContacts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const offset = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      getAllContacts(limit, offset),
      getContactCount(),
    ]);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages.',
    });
  }
}
