import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Test connection on startup
pool.query('SELECT NOW()')
  .then(() => console.log('✅ Database connected successfully'))
  .catch((err) => console.error('❌ Database connection error:', err.message));

export default pool;
