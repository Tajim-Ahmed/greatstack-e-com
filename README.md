# 🚀 Full-Stack E‑Commerce Web Application

A modern, production‑ready **full‑stack e‑commerce platform** built with the MERN stack and deployed on **Vercel**. This project demonstrates real‑world development practices including authentication, RESTful APIs, cloud storage, and scalable deployment.

> 💼 Designed to showcase full‑stack skills for **employers and recruiters**.

---

## 🌟 Live Demo

🔗 **User Frontend (Vercel):** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
🔗 **Admin Panel (Vercel):** [https://your-admin-url.vercel.app](https://your-admin-url.vercel.app)
🔗 **Backend API:** [https://your-backend-url](https://your-backend-url)

---

## 🧠 Tech Stack

### Frontend (User)

* ⚛️ **React.js** – User-facing interface
* 🎨 **CSS / Modern Styling**
* 🌐 **Axios** – API communication
* 🚀 **Vercel** – Deployment

### Admin Panel

* ⚛️ **React.js** – Admin dashboard
* 🔐 Role-based access (Admin only)
* 📦 Product & order management UI
* 🚀 **Vercel** – Deployment

---

## ✨ Key Features

### 👤 User Features

* User authentication (JWT-based)
* Browse products with images
* Add to cart & place orders
* Secure checkout flow

### 🛠️ Admin Features

* Admin authentication & protected routes
* Add / update / delete products
* Upload product images using Cloudinary
* Manage users & orders from dashboard

### ⚙️ Technical Highlights

* RESTful API architecture
* Secure environment variable handling
* Clean project structure (frontend + backend)
* Production‑ready build & deployment

---

## 📁 Project Structure

```
project-root/
│
├── frontend/        # User-facing React app
├── admin/           # Admin dashboard (React)
│
├── backend/         # Express + MongoDB backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
└── .gitignore
```

project-root/
│
├── frontend/        # React frontend (Vercel)
│
├── backend/         # Express + MongoDB backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
└── .gitignore

```

---

## 🔐 Environment Variables

Environment variables are **not committed** for security reasons.

### Backend (`backend/.env.example`)
```

MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

### Frontend (`frontend/.env.example`)
```

VITE_API_URL=

```

### Admin (`admin/.env.example`)
```

VITE_API_URL=

```
VITE_API_URL=
```

---

## 🚀 Deployment

* **Frontend** deployed on **Vercel**
* **Backend** deployed using cloud hosting
* MongoDB hosted on **MongoDB Atlas**
* Media handled via **Cloudinary**

---

## 🧪 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Add environment variables

Create `.env` files in both frontend and backend using the examples above.

### 4️⃣ Start development servers

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

---

## 🎯 What This Project Demonstrates

* Full‑stack MERN development
* API design & backend logic
* Authentication & security best practices
* Cloud services integration
* Real‑world deployment workflow

---

## 👨‍💻 About the Developer

**Tajim Ahmed**
Full‑Stack Developer | MERN Stack | Web Applications

* Passionate about building scalable web applications
* Strong foundation in frontend & backend development
* Always eager to learn and improve

📫 **Feel free to connect or reach out!**

---

⭐ If you like this project, consider giving it a star — it helps a lot!
