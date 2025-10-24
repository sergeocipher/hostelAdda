# 🏡 HostelAdda

HostelAdda is a full-stack social collaboration app designed for hostel students 🧑‍🎓👩‍🎓 to effortlessly coordinate group orders, share posts, and join or manage ongoing orders — all in one place!

💬 It helps students save money, time, and effort by streamlining the group-buying process inside hostels — making everyday collaboration smooth and fun! 🚀

---

## 🌐 Live Demo

- Frontend: [https://hostel-adda.vercel.app](https://hostel-adda.vercel.app)
- Backend: [https://hosteladda.onrender.com](https://hosteladda.onrender.com)


---

## ✨ Features

- 🔐 User Authentication (Sign up / Login)
📝 Create posts for group orders (title, description, type, platform, expiry, participants limit)
- 🤝 Join a post with a short description/message
- 🚪 Leave a post anytime
- 👥 View participants of any post (name, email)
- 🎯 Populate post creator and participants for richer UIs
- 🔒 Protected routes using JWT
- ⚡ Clean REST API and React frontend (Vite + Tailwind)

---

## 🛠️ Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Deployment: Vercel (frontend), Render (backend)

---

## 🚀 Installation

Follow these steps to run the project locally.

1. Clone the repository (this monorepo contains both frontend and backend):

```bash
git clone https://github.com/sergeocipher/hostelAdda.git
cd hostelAdda
```

2. Backend setup

```bash
cd backend
npm install
npm run dev
```

3. Frontend setup

```bash
cd frontend/app
npm install
npm run dev
```

Open the frontend in your browser (Vite will show the local URL, usually http://localhost:5173) and ensure the backend is running at the URL configured in the frontend `.env` (default in this repo is http://localhost:8000/api).

---

## 📁 Project Structure

High-level structure (top-level folders):

```
hostelAdda/
├─ backend/                
│  ├─ .env
│  ├─ package.json
│  └─ src/
│     ├─ app.js             
│     ├─ server.js          
│     ├─ config/
│     │  ├─ connectDB.js    
│     │  └─ token.js        
│     ├─ controllers/       
│     │  ├─ auth.controller.js
│     │  ├─ post.controller.js
│     │  └─ participation.controller.js
│     ├─ middlewares/       
│     ├─ models/            
│     └─ routes/           
└─ frontend/
	 └─ app/                 
			├─ package.json
			└─ src/
				 ├─ main.jsx       
				 ├─ App.jsx         
				 ├─ pages/          
				 ├─ components/     
				 └─ utils/api.js   
```

---

## 🧭 Usage

Typical user flow:

1. Sign up / Login:  `POST /api/auth/signup` and `POST /api/auth/login`.
2. Create a post:`POST /api/posts` (authenticated).
3. View post: `GET /api/posts` or `GET /api/posts/:id` 
4. Join post: authenticated users `POST /api/participations/:postId/join` with a JSON body `{ description: "I want X" }`.
5. View participants: `GET /api/participations/:postId/participants` (authenticated).

---

## 🤝 Contributing

Thanks for your interest in contributing! Please follow these steps:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feat/my-feature
```

3. Make your changes and commit with descriptive messages

```bash
git add .
git commit -m "feat: add my new feature"
```

4. Push to your fork and open a Pull Request against `main`

5. Wait for CI / maintainers to review and merge

Guidelines:
- Keep changes focused and small.
- Add or update tests for new features.
- Write clear commit messages and PR descriptions.

---
