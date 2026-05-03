import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://bhanu-portfolio-weld.vercel.app',
    /\.vercel\.app$/,
  ],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

app.post(
  '/api/contact',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10, max: 2000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.OWNER_EMAIL || 'bhanuteja766192@gmail.com',
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">New message from your portfolio</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px; font-weight:bold; color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Subject</td><td style="padding:8px;">${subject}</td></tr>
            </table>
            <div style="margin-top:16px; padding:16px; background:#f0f9ff; border-left:4px solid #0ea5e9; border-radius:4px;">
              <p style="margin:0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color:#999; font-size:12px; margin-top:16px;">Sent from bhanuteja.dev portfolio</p>
          </div>
        `,
      });

      await transporter.sendMail({
        from: `"Bhanu Teja" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0ea5e9;">Hey ${name}, got your message!</h2>
            <p>Thanks for getting in touch. I'll review your message and get back to you within 1–2 business days.</p>
            <p style="background:#f0f9ff; padding:16px; border-left:4px solid #0ea5e9; border-radius:4px; white-space:pre-wrap;">${message}</p>
            <p>Best,<br/><strong>M Bhanu Teja</strong><br/>Full Stack & AI Developer</p>
          </div>
        `,
      });

      res.json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
      console.error('Email error:', err);
      res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
