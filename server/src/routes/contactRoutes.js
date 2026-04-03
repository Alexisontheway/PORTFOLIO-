import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { contactValidationRules, validate } from '../middleware/validator.js';

const router = Router();

// POST /api/contact — Submit contact form
router.post(
  '/',
  contactLimiter,
  contactValidationRules,
  validate,
  submitContact
);

// GET /api/contact — List messages (admin)
router.get('/', getContacts);

export default router;
