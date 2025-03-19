# 🍕 **Pizza Delivery App**

🔗 **Live Demo:** [Pizza Delivery App on Vercel](https://pizza-delivery-app-nu.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-✔️-blue)
![Prisma](https://img.shields.io/badge/Prisma-✔️-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-✔️-blue)

---

## 📌 **Overview**
The **Pizza Delivery App** allows users to explore the menu, filter pizzas by various criteria, and place orders. Built with **Next.js**, **Prisma**, and **Tailwind CSS**, the app supports **dynamic rendering** and **API-based integrations** such as **payment gateway via YooKassa** and **authentication via NextAuth**.

---

## 📋 **Core Technologies**
- 🏗 **Frontend**: `Next.js`, `React`, `TailwindCSS`
- ⚡ **Backend**: `Next.js API Routes`, `Prisma ORM` for DB interactions
- 🗃 **Database**: `PostgreSQL` with **Prisma**
- 🔐 **Authentication**: `next-auth` (GitHub, Google, and more)
- 💳 **Payments**: `YooKassa` integration for processing payments
- 🎯 **State Management**: `Zustand`
- 📦 **Form Handling**: `react-hook-form`, `zod` for form validation
- 🔧 **Utilities**: `axios`, `clsx`, `react-hot-toast`

---

## 🚀 **Features**
✔️ **Search & Filter** pizzas by size, type, and ingredients  
✔️ **Dynamic Pizza Pages** with detailed information  
✔️ **User Authentication** via **Google**, **GitHub**, and **email**  
✔️ **Order Management** with **payment integration** via YooKassa  
✔️ **Responsive UI** using **Tailwind CSS**  
✔️ **Admin Panel** to manage categories and products

---

## 📦 **Local Setup**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/MacksimBondarew/pizza.git
cd pizza
```

### 2️⃣ **Setup Environment Variables**
Create a `.env` file in the root directory and add the following configurations:
```env
POSTGRES_PRISMA_URL=your_database_url
POSTGRES_URL_NON_POOLING=your_database_url
NEXT_PUBLIC_API_URL=http://localhost:3000/api
RESEND_API_KEY=your_resend_api_key
YOOKASSA_API_KEY=your_yookassa_api_key
YOOKASSA_CALLBACK_URL=http://localhost:3000/?paid
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3️⃣ **Install Dependencies**
```bash
npm install
```

### 4️⃣ **Run Prisma Migrations**
```bash
npx prisma migrate dev --name init
```

### 5️⃣ **Run the Application Locally**
```bash
npm run dev
```
📌 *Your app will be available at `http://localhost:3000`.*

---

## 📂 **Project Structure**
```
📁 pizza
 ┣ 📁 .next          # Next.js build files
 ┣ 📁 prisma         # Prisma schema and database configurations
 ┣ 📁 src
 ┃ ┣ 📁 app         # App Router pages (checkout, dashboard, etc.)
 ┃ ┣ 📁 api         # API routes (handling requests like checkout)
 ┃ ┣ 📁 components  # Reusable UI components (Buttons, Inputs, etc.)
 ┃ ┣ 📁 hooks       # Custom hooks for handling logic
 ┃ ┣ 📁 shared      # Shared components, utility functions
 ┃ ┣ 📁 store       # Zustand for state management
 ┃ ┗ 📁 styles      # TailwindCSS files and custom styles
 ┣ 📄 .env.example   # Example of the .env file
 ┣ 📄 README.md      # This file
 ┣ 📄 package.json   # Project dependencies and scripts
 ┣ 📄 tsconfig.json  # TypeScript configuration
 ┗ 📄 next.config.js # Next.js configuration
```

---

## 🔥 **Deploy on Vercel**
To deploy your own version:
1️⃣ **Sign up at [Vercel](https://vercel.com/)**  
2️⃣ **Set environment variables** (`POSTGRES_PRISMA_URL`, `NEXT_PUBLIC_API_URL`, etc.) in Vercel  
3️⃣ **Deploy the app**:
```bash
vercel --prod
```
✅ **Deployment complete!**

---

## 🛠 **Running Tests**
If you are planning to add tests, you can run them using the following script:
```bash
npm run test
```

---

## 🤝 **Contributing**
If you want to contribute:
1. **Fork the repository**  
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make changes and commit**:
   ```bash
   git commit -m "Added feature"
   ```
4. **Submit a PR to `main`** 🚀

---

## 🔗 **Useful Links**
- **Live Demo** → [Pizza Delivery App on Vercel](https://pizza-delivery-app-nu.vercel.app)  
- **Next.js Docs** → [nextjs.org](https://nextjs.org/)  
- **Prisma Docs** → [prisma.io](https://www.prisma.io/)  
- **TailwindCSS Docs** → [tailwindcss.com](https://tailwindcss.com/)  
- **YooKassa Docs** → [yookassa.ru](https://yookassa.ru/)  
- **Resend Docs** → [resend.com](https://resend.com/)  

💙 **Thank you for using Pizza Delivery App!** 🍕 🚀
