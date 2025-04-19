import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 Nouveau message de ${name} via Portfolio`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
            <div style="background-color: #d90000; color: white; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">🚀 Nouveau Message Reçu</h2>
            </div>
            <div style="padding: 20px;">
              <p><strong>👤 Nom:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p style="margin-top: 20px;"><strong>💬 Message:</strong></p>
              <div style="padding: 15px; background-color: #f1f1f1; border-radius: 6px; color: #111; font-style: italic;">
                ${message}
              </div>
            </div>
            <div style="padding: 15px; text-align: center; font-size: 12px; color: #aaa;">
              Ce message a été envoyé via votre portfolio.
            </div>
          </div>
        </div>
      `,
    });    

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
}
