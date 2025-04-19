# 💼 Youb Nader's Portfolio

A stunning, animated, and interactive personal portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**, showcasing my skills, projects, and contact information in a modern, elegant, and tech-themed style.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Animations**: Scroll effects, GSAP, Three.js (WIP)
- **Backend**: Custom Node.js API (hosted on Render)
- **Email Handling**: Integrated with Nodemailer & reCAPTCHA v2
- **reCAPTCHA**: Google reCAPTCHA v2 (Invisible or Checkbox)
---

## 📬 Contact Form

- **Validations**: Frontend + reCAPTCHA protection
- **Security**: Google reCAPTCHA v2 integrated
- **Backend**: Sends emails using Nodemailer through an Express API

> ✅ Works with both reCAPTCHA **Checkbox** or **Invisible** mode.  
> 🔐 Secure: Rejects submissions without a valid reCAPTCHA token.

---

## 🔧 Environment Variables

To run locally, create a `.env.local` file:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RECAPTCHA_SECRET=your_recaptcha_secret
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```
---
## 🛠️ Installation

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```
---
## 🚀 Deployment

You can deploy this project on platforms like **Vercel**, **Netlify**, or any other hosting provider.

### Steps for Deployment on Vercel:

1. Go to [Vercel](https://vercel.com/) and sign in (or create an account if you don’t have one).
2. Click on **New Project** and connect your GitHub account.
3. Choose the repository of your portfolio.
4. Vercel will automatically detect that it’s a Next.js project and configure it for you.
5. Add your environment variables in the Vercel dashboard:
    - `EMAIL_USER` 
    - `EMAIL_PASS`
    - `RECAPTCHA_SECRET`
    - `RECAPTCHA_SITE_KEY`
6. Click on **Deploy** to deploy your site!

Vercel will automatically build and deploy your portfolio. You’ll get a live URL for your portfolio once it’s deployed! 🎉

### Steps for Deployment on Netlify:

1. Go to [Netlify](https://www.netlify.com/) and sign in (or create an account if you don’t have one).
2. Click on **New site from Git** and connect your GitHub account.
3. Select your repository and deploy it.
4. Add the environment variables in the Netlify dashboard under **Site settings > Build & deploy > Environment**:
    - `EMAIL_USER` 
    - `EMAIL_PASS`
    - `RECAPTCHA_SECRET`
    - `RECAPTCHA_SITE_KEY`
5. Click on **Deploy site**.

Your portfolio will be live after the deployment process is finished. 🎉
---
---

## 📞 Connect with Me

Feel free to reach out to me via:

- **Email**: [youb.nader@gmail.com](mailto:youb.nader@examp.com)
---

© 2025 **Youb Nader**. All Rights Reserved.
