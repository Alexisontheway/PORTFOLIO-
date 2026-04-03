import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { generalLimiter } from './middleware/rateLimiter.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// ---------------------
// Security Middleware
// ---------------------
app.use(helmet());

// CORS
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:3000')
  .split(',')
  .map((url) => url.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Body parsing
app.use(express.json({ limit: '10kb' }));

// General rate limiting
app.use('/api/', generalLimiter);

// ---------------------
// Routes
// ---------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact API
app.use('/api/contact', contactRoutes);

// ---------------------
// Error Handling
// ---------------------

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
  });
});

export default app;
