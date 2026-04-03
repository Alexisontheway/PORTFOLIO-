# Priyanshu Pramanik — Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

A modern, full-stack personal portfolio website built with React, Node.js, Express, and PostgreSQL. Designed to showcase engineering skills, projects, and experience with a premium, hire-ready presentation.

---

## ✨ Features

- **Modern UI** — Glassmorphism, gradient accents, smooth Framer Motion animations
- **Dark / Light Mode** — System-aware with manual toggle, persisted in localStorage
- **Interactive Particles** — Canvas-based particle system with mouse interaction
- **Filterable Projects** — Category-based project filtering with expandable details
- **Contact Form** — Full backend integration with PostgreSQL storage + email notifications
- **Responsive** — Mobile-first design, optimized for all screen sizes
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML, proper heading hierarchy
- **Security Hardened** — Helmet, CORS, rate limiting, input sanitization, parameterized queries

---

## 🏗️ Architecture

```
portfolio/
├── client/           # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── sections/     # Page sections (Hero, About, etc.)
│   │   ├── data/         # Static portfolio data
│   │   ├── hooks/        # Custom React hooks
│   │   └── utils/        # API utilities
│   └── ...
├── server/           # Node.js + Express backend
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Rate limiting, validation
│   │   ├── models/       # Database queries
│   │   ├── routes/       # API routes
│   │   └── utils/        # Email utility
│   └── db/
│       └── schema.sql    # PostgreSQL schema
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud — [Neon](https://neon.tech) recommended)

### 1. Clone & Install

```bash
git clone https://github.com/Alexisontheway/portfolio.git
cd portfolio

# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### 2. Configure Environment

```bash
# In server/ directory
cp .env.example .env
# Edit .env with your database URL and SMTP credentials
```

### 3. Set Up Database

Run the schema against your PostgreSQL database:

```bash
psql $DATABASE_URL < db/schema.sql
```

Or paste the contents of `server/db/schema.sql` into your database console (Neon, Supabase, etc).

### 4. Start Development

```bash
# Terminal 1 — Backend (from server/ directory)
npm run dev

# Terminal 2 — Frontend (from client/ directory)
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies API requests to the backend on `http://localhost:5000`.

---

## 📡 API Endpoints

| Method | Endpoint       | Description                 | Auth   |
| ------ | -------------- | --------------------------- | ------ |
| POST   | `/api/contact` | Submit contact form message | Public |
| GET    | `/api/contact` | List all messages (admin)   | Public |
| GET    | `/api/health`  | Server health check         | Public |

### POST /api/contact

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd love to discuss a project."
}
```

**Response (201):**

```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": { "id": 1, "created_at": "2026-03-30T12:00:00.000Z" }
}
```

---

## 🛡️ Security

- **Helmet** — Sets secure HTTP headers
- **CORS** — Configured for frontend origin only
- **Rate Limiting** — 5 contact submissions per 15 min per IP
- **Input Validation** — express-validator with sanitization
- **SQL Injection** — Parameterized queries (no string interpolation)

---

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick summary:**

- **Frontend** → Vercel
- **Backend** → Render
- **Database** → Neon PostgreSQL

### GitHub Push -> Automated Deploy (new)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. On push to `main`/`master`, it:

- installs dependencies for `client` and `server`
- builds the frontend
- deploys backend to Render
- deploys frontend to Vercel

Set these repository secrets in GitHub:

- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Local screenshot preview

In `client/`:

1. `npm install`
2. `npm run screenshot`

This will:
- start `vite preview` on `http://127.0.0.1:4173`
- take `preview.png` of app
- stop the preview server automatically

---

## 🛠️ Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion   |
| Backend  | Node.js, Express 4, Nodemailer                |
| Database | PostgreSQL (via `pg` driver)                  |
| Icons    | Lucide React                                  |
| Security | Helmet, express-rate-limit, express-validator |

---

## 📄 License

MIT © Priyanshu Pramanik
