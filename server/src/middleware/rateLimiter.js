import rateLimit from 'express-rate-limit';

/**
 * Rate limiter for contact form submissions
 * Prevents spam: max 5 requests per 15 minutes per IP
 */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions. Please try again in a few minutes.',
  },
});

/**
 * General API rate limiter
 * Max 100 requests per 15 minutes
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Rate limit exceeded. Please try again later.',
  },
});
