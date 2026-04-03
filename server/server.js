import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║   Portfolio API Server                    ║
  ║   Running on http://localhost:${PORT}        ║
  ║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(22)}║
  ╚══════════════════════════════════════════╝
  `);
});
