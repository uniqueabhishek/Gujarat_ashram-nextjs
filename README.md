# Ashram Next.js Platform

A modern, high-performance web platform built with **Next.js 16**, designed for scalability and speed. This project demonstrates a production-ready architecture using the latest React Server Components and Server Actions.

<p align="center">
  <img src="public/images/screenshot-homepage.png" alt="Ashram Platform Homepage" width="800"/>
</p>

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Styling**: Tailwind CSS & Framer Motion
- **Authentication**: Custom JWT implementation (Bcrypt)
- **Deployment**: Vercel / Netlify ready

## 🛠️ Key Features

- **React Server Components**: Optimized data fetching and rendering.
- **Server Actions**: Type-safe mutations without API routes.
- **Dynamic Image Optimization**: leveraged `next/image` for high LCP scores.
- **Admin Dashboard**: Protected routes and content management.

## 📦 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ashram-nextjs.git
    cd ashram-nextjs
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Database**:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 🏗️ Project Structure

```bash
├── app/                  # App Router pages & API
├── components/           # Reusable UI components
├── lib/                  # Utilities & Prisma client
├── prisma/               # Database schema
└── public/               # Static assets
```

## 👨‍💻 Author

Built by [Your Name] as a demonstration of modern full-stack web development.
