import pool from '../config/db.js';

/**
 * Insert a new contact message into the database
 */
export async function createContact({ name, email, message }) {
  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, message, created_at
  `;
  const result = await pool.query(query, [name, email, message]);
  return result.rows[0];
}

/**
 * Fetch all contact messages, most recent first
 */
export async function getAllContacts(limit = 50, offset = 0) {
  const query = `
    SELECT id, name, email, message, created_at
    FROM contacts
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2
  `;
  const result = await pool.query(query, [limit, offset]);
  return result.rows;
}

/**
 * Get total count of contact messages
 */
export async function getContactCount() {
  const result = await pool.query('SELECT COUNT(*) as count FROM contacts');
  return parseInt(result.rows[0].count);
}
