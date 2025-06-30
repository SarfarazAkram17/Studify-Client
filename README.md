# 🎓 Studify — Assignment Management Platform

Studify is a modern, full-stack, Firebase-authenticated assignment management web application built for collaborative learning. Users can **create**, **submit**, and **evaluate** assignments with secure access control, seamless UI, and responsive design.

🌐 **Live Site**: https://assignment-11-sarfaraz-akram.netlify.app

---

## 🚀 Features Overview

### 🔐 Authentication & Security
- Firebase Authentication (Email/Password & Google Sign-In)
- Protected routes and secure API calls
- UID-based resource ownership checks

### 📝 Assignments
- Create, update, and delete assignments
- Upload thumbnail, set difficulty, due date, and total marks
- View assignment details
- Filter, and search assignments

### 📤 Submissions
- Submit assignments with Google Docs links & optional notes
- View attempted assignments with status, obtained marks, and feedback
- One unique submission per assignment per user

### ✅ Evaluation
- Evaluate all pending submissions (excluding self-submitted)
- Grade assignments with marks and feedback
- Automatically updates status to "completed" after grading

### 🌗 UI & UX
- Theme toggle (Dark/Light)
- SweetAlert confirmation modals
- Lottie animations for loading
- Toast notifications
- Fully responsive on all devices

---

## 📦 Tech Stack

| Layer      | Technology                               |
|------------|------------------------------------------|
| Frontend   | React, Tailwind CSS, DaisyUI             |
| Backend    | Node.js, Express.js, MongoDB             |
| Auth       | Firebase Authentication                  |
| Animation  | Lottie, Framer Motion                    |
| Deployment | Netlify (Frontend), Vercel (Backend)     |

---

## 📦 NPM Packages Used

| Package             | Purpose                                      |
|---------------------|----------------------------------------------|
| Tailwindcss         | Utility-first CSS framework                  |
| Daisyui             | Component library for Tailwind CSS           |
| React-icons         | Use required icons                           |
| React-toastify      | Toast notifications                          |
| React-tooltip       | Tooltip support                              |
| React-datepicker    | Elegant date picker UI                       |
| Framer-motion       | Animation and transition framework           |
| Lottie-react        | Lottie animations                            |
| Sweetalert2         | Pop-up confirmations                         |