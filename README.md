# Nivethan Sothilingam — Portfolio

This is my personal Portfolio website. The site presents an introduction, selected work, experience, skills, education, certifications, and a contact form.

## Built with

- [Next.js 14](https://nextjs.org/) with the App Router
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion and GSAP for animation
- Lenis for smooth scrolling
- Nodemailer for contact-form email delivery

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |

## Contact form configuration

The contact form uses Gmail SMTP through Nodemailer. Create a `.env.local` file in the project root with the following values:

```env
MAIL_USER=your-gmail-address@example.com
MAIL_PASS=your-gmail-app-password
MAIL_TO=recipient@example.com
```

Use a Gmail App Password for `MAIL_PASS`; do not commit `.env.local` or any other environment file containing credentials.

## Updating portfolio content

Most of the portfolio content is centralized in [`lib/data.ts`](./lib/data.ts). Update the exported profile, project, experience, education, certification, skill, and navigation data there.

Static assets are stored in [`public/`](./public/):

- Replace the profile photo at `public/images/nive.webp`.
- Add project screenshots under `public/images/projects/`.
- Add or replace the downloadable CV at `public/Nivethan-Sothilingam-CV.pdf`.

When adding project screenshots, include their paths in the relevant project entry in `lib/data.ts`.

## Project structure

```text
app/
  api/contact/       Contact-form API route
  globals.css        Global styles
  layout.tsx         Site metadata and root layout
  page.tsx           Portfolio page
components/          Page sections and UI components
lib/
  data.ts            Portfolio content
  icons.ts           Icon definitions
public/              Images and downloadable assets
```

## Production build

Build and run the production version locally with:

```bash
npm run build
npm run start
```

The application can be deployed to a Next.js-compatible host such as Vercel. Configure `MAIL_USER`, `MAIL_PASS`, and `MAIL_TO` in the host's environment settings before enabling the contact form.
