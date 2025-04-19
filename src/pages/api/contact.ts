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
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="background-color:#0f1115;padding:40px;font-family:'Segoe UI','Roboto','Helvetica Neue',sans-serif;color:#e0e0e0;">
          <div style="max-width:600px;margin:auto;background:linear-gradient(145deg,#1a1d23,#111318);border-radius:12px;overflow:hidden;box-shadow:0 0 30px rgba(0,0,0,0.4);">
            
            <div style="padding:30px;border-bottom:1px solid #2a2e35;">
              <h2 style="margin:0;color:#d90000;font-size:24px;">📩 New Portfolio Message</h2>
              <p style="margin:6px 0 0;font-size:14px;color:#aaa;">Someone just reached out via your website.</p>
            </div>
            
            <div style="padding:30px;">
              <p style="margin-bottom:10px;"><strong style="color:#fff;">👤 Name:</strong> <span style="color:#ccc;">${name}</span></p>
              <p style="margin-bottom:10px;"><strong style="color:#fff;">📧 Email:</strong> <span style="color:#ccc;">${email}</span></p>
              <div style="margin-top:20px;">
                <strong style="color:#fff;">💬 Message:</strong>
                <div style="margin-top:10px;padding:15px;border-left:4px solid #d90000;background-color:#181b21;border-radius:6px;color:#ccc;white-space:pre-line;">
                  ${message}
                </div>
              </div>
            </div>
    
            <div style="padding:20px;text-align:center;border-top:1px solid #2a2e35;font-size:12px;color:#666;">
              This message was sent from your portfolio contact form.
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
