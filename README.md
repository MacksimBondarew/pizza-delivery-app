# 🍕 **Pizza Delivery App**  

🔗 **Live Demo:** [pizza-macksimbondarews-projects.vercel.app](https://pizza-macksimbondarews-projects.vercel.app)  

[![Next.js](https://img.shields.io/badge/Next.js-15.1.1-blue)](https://nextjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-✔️-blue)](https://www.typescriptlang.org/)  
[![Prisma](https://img.shields.io/badge/Prisma-✔️-blue)](https://www.prisma.io/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-✔️-blue)](https://tailwindcss.com/)  

🚀 **Pizza Delivery App** is a web application for ordering pizza, built with **Next.js**.  
It provides **product filtering, category management, order processing**, and **online payments via YooKassa**.

---

## 📌 **Core Technologies**
- 🏗 **Frontend**: `Next.js`, `React`, `TailwindCSS`
- ⚡ **Backend**: `Next.js API Routes`
- 🗃 **Database**: `PostgreSQL` + `Prisma ORM`
- 🔐 **Authentication**: `next-auth`
- 💳 **Payments**: `YooKassa`
- 🎯 **State Management**: `Zustand`
- 📦 **Validation**: `Zod`, `React Hook Form`

---

## 🚀 **Features**
✔️ **Dynamic pizza pages**  
✔️ **Product filtering (by size, ingredients, price, etc.)**  
✔️ **Category and product management**  
✔️ **Authentication via Next-Auth**  
✔️ **Order processing with YooKassa payments**  
✔️ **Admin panel for product management**  

---

## 📦 **Local Setup**
### 1️⃣ **Clone the repository**
```bash
git clone https://github.com/MacksimBondarew/pizza.git
cd pizza
```

### 2️⃣ **Configure environment variables**
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
YOOKASSA_SHOP_ID=your_yookassa_shop_id
YOOKASSA_SECRET_KEY=your_yookassa_secret_key
```

### 3️⃣ **Install dependencies**
```bash
npm install
```

### 4️⃣ **Run Prisma Studio (optional)**
```bash
npm run prisma:studio
```

### 5️⃣ **Run database migrations**
```bash
npx prisma migrate dev --name init
```

### 6️⃣ **Start the server**
```bash
npm run dev
```
📌 *The app will be available at* `http://localhost:3000`.

---

## 📂 **Project Structure**
```
📁 pizza
 ┣ 📁 .next          # Next.js build files
 ┣ 📁 src
 ┃ ┣ 📁 app         # Next.js pages (App Router)
 ┃ ┃ ┣ 📁 (root)     # Main page
 ┃ ┃ ┣ 📁 (checkout)  # Order processing
 ┃ ┣ 📁 api         # API routes
 ┃ ┣ 📁 prisma      # Database configuration
 ┃ ┣ 📁 shared      # Shared components (UI, forms, modals)
 ┃ ┣ 📁 hooks       # Custom React hooks
 ┃ ┣ 📁 lib         # API interaction logic
 ┃ ┣ 📁 store       # State management (Zustand)
 ┃ ┗ 📁 services    # Integration with payment services
 ┣ 📄 .env.example  # Example environment variables file
 ┣ 📄 README.md     # Project documentation
 ┗ 📄 next.config.js # Next.js configuration
```

---

## 🔥 **Deploying to Vercel**
This project can be deployed to **Vercel**: [Pizza Delivery App](https://pizza-macksimbondarews-projects.vercel.app)  

To deploy your own version:
1️⃣ **Sign up at [Vercel](https://vercel.com/)**  
2️⃣ **Set environment variables** (`DATABASE_URL`, `NEXTAUTH_SECRET`, `YOOKASSA_SHOP_ID`, `YOOKASSA_SECRET_KEY`)  
3️⃣ **Deploy using the command**:
```bash
vercel --prod
```
✅ **Deployment complete!**

---

## 🤝 **How to Contribute**
1. **Fork the repository**  
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make changes and commit**:
   ```bash
   git commit -m "Added new feature"
   ```
4. **Submit a PR to `main`** 🚀

---

## 🔗 **Useful Resources**
- **Live Project** → [Pizza Delivery App](https://pizza-macksimbondarews-projects.vercel.app)  
- **Next.js Docs** → [nextjs.org](https://nextjs.org/)  
- **Prisma Docs** → [prisma.io](https://www.prisma.io/)  
- **Tailwind CSS Docs** → [tailwindcss.com](https://tailwindcss.com/)  
- **YooKassa Docs** → [yookassa.ru](https://yookassa.ru/)  

💙 Thank you for using Pizza Delivery App! 🍕 🚀
