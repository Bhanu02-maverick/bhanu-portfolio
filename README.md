# M Bhanu Teja — Portfolio

Full-stack personal portfolio built with **React + Vite + Tailwind CSS** (frontend) and **Node.js + Express + Nodemailer** (backend). Features a live contact form that sends real emails.

---

## 🗂 Project Structure

```
portfolio/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/   # Navbar, Footer, ScrollToTop
│   │   ├── pages/        # Home, About, Projects, Contact
│   │   ├── hooks/        # useReveal (scroll animations)
│   │   ├── data.js       # All your resume data (edit this!)
│   │   └── index.css     # Tailwind + custom styles
│   └── package.json
├── backend/           # Node.js + Express API
│   ├── server.js         # Express server with /api/contact
│   ├── .env.example      # Copy to .env and fill in
│   └── package.json
└── package.json       # Root — runs both together
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install          # installs concurrently at root
npm run install:all  # installs frontend + backend deps
```

### 2. Configure email (for contact form)
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
EMAIL_USER=bhanuteja766192@gmail.com
EMAIL_PASS=your_gmail_app_password
OWNER_EMAIL=bhanuteja766192@gmail.com
```

> **Getting a Gmail App Password:**
> 1. Go to [myaccount.google.com](https://myaccount.google.com)
> 2. Security → 2-Step Verification → App Passwords
> 3. Create one for "Mail" → copy the 16-char password

### 3. Run both servers
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## ✏️ Customising your data

Edit `frontend/src/data.js` to update:
- Name, bio, tagline, contact details
- Projects (add/remove/edit)
- Skills and categories
- Experience entries
- Education and achievements

---

## 🌐 Deployment

### Frontend → Vercel / Netlify
```bash
cd frontend && npm run build
# Deploy the `dist/` folder
```
Set env variable on Vercel: `VITE_API_URL=https://your-backend.railway.app`

Update `vite.config.js` proxy target to match your live backend URL.

### Backend → Railway / Render
1. Push to GitHub
2. Connect repo to [Railway](https://railway.app) or [Render](https://render.com)
3. Set environment variables (EMAIL_USER, EMAIL_PASS, etc.)
4. Done — auto-deploys on every push

---

## 📦 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| Animations | Framer Motion, react-intersection-observer |
| Icons | Lucide React |
| Backend | Node.js, Express |
| Email | Nodemailer (Gmail) |
| Rate limiting | express-rate-limit |
| Validation | express-validator |

---

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home — hero, projects snapshot, achievements, CTA |
| `/about` | Bio, skills, experience timeline, education |
| `/projects` | Full project list with details |
| `/contact` | Contact form + social links (sends real email) |
