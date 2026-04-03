# Deployment Guide

Step-by-step instructions to deploy the portfolio to production.

---

## 1. Database — Neon PostgreSQL

1. Sign up at [neon.tech](https://neon.tech) (free tier)
2. Create a new project (e.g., `portfolio`)
3. Copy the **connection string** from the dashboard
4. Open the **SQL Editor** and paste the contents of `server/db/schema.sql`
5. Run the SQL to create the `contacts` table

Save the connection string — you'll need it for the backend deployment.

---

## 2. Backend — Render

1. Sign up at [render.com](https://render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repo
4. Configure:

| Setting          | Value                      |
|-----------------|----------------------------|
| **Name**        | `portfolio-api`            |
| **Root Dir**    | `server`                   |
| **Runtime**     | Node                       |
| **Build Cmd**   | `npm install`              |
| **Start Cmd**   | `npm start`                |
| **Plan**        | Free                       |

5. Add **Environment Variables**:

```
PORT=5000
NODE_ENV=production
DATABASE_URL=<your-neon-connection-string>
CLIENT_URL=https://your-frontend-domain.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=priyanshualex@gmail.com
```

6. Click **Deploy**

Note the deployed URL (e.g., `https://portfolio-api-xxxx.onrender.com`)

---

## 3. Frontend — Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repo
4. Configure:

| Setting            | Value                        |
|-------------------|------------------------------|
| **Root Directory** | `client`                     |
| **Framework**      | Vite                         |
| **Build Command**  | `npm run build`              |
| **Output Dir**     | `dist`                       |

5. Add **Environment Variable**:

```
VITE_API_URL=https://portfolio-api-xxxx.onrender.com
```

6. Click **Deploy**

---

## 4. Gmail SMTP Setup (for email notifications)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App Passwords** → Generate one for "Mail"
4. Use the 16-character password as `SMTP_PASS`

---

## 5. Custom Domain (Optional)

### Vercel (Frontend)
1. Go to your project → **Settings** → **Domains**
2. Add your domain and follow DNS instructions

### Render (Backend)
1. Go to your service → **Settings** → **Custom Domains**
2. Add `api.yourdomain.com` and configure DNS

---

## 6. Post-Deployment Checklist

- [ ] Frontend loads correctly at production URL
- [ ] All sections render properly
- [ ] Dark/Light mode toggle works
- [ ] Contact form submits successfully
- [ ] Database receives new entries
- [ ] Email notifications are sent
- [ ] Mobile responsiveness verified
- [ ] HTTPS is active on all services
- [ ] Rate limiting works (try submitting 6+ times quickly)

---

## Environment Variables Summary

### Backend (`server/.env`)

| Variable             | Description                          | Required |
|---------------------|--------------------------------------|----------|
| `PORT`              | Server port (default: 5000)          | No       |
| `NODE_ENV`          | `production` / `development`         | Yes      |
| `DATABASE_URL`      | PostgreSQL connection string         | Yes      |
| `CLIENT_URL`        | Frontend URL for CORS                | Yes      |
| `SMTP_HOST`         | SMTP server host                     | No       |
| `SMTP_PORT`         | SMTP server port                     | No       |
| `SMTP_USER`         | SMTP username/email                  | No       |
| `SMTP_PASS`         | SMTP password/app password           | No       |
| `NOTIFICATION_EMAIL`| Where to receive notifications       | No       |

### Frontend (`client/.env`)

| Variable        | Description                    | Required   |
|----------------|--------------------------------|------------|
| `VITE_API_URL` | Backend API URL                | Production |
