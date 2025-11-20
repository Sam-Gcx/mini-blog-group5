# 📰 Mini Blog

A simple blogging application built with **React** and **Vite**, showcasing core front-end development skills including CRUD operations, component decomposition, async API calls, loading/error handling, and controlled forms.

This project is part of my React learning series, focused on practising real-world front-end patterns used in modern web applications.

---

## 🚀 Features

- **Create blog posts** with title + content  
- **Delete posts** using an interactive UI  
- **Fetch posts from a mock API**  
- **Async loading state** (`Loading posts...`)  
- **Error handling** with user-friendly messages  
- **Reusable components** (Form, List, Post)  
- **Clean, readable UI** styled with SCSS  

---

## 🧩 Tech Stack

- **React (Hooks + useEffect + useState)**
- **Vite**
- **JavaScript (ES6+)**
- **SCSS**
- **Mock API utilities**

---

## 📂 Project Structure


### 🔍 Responsibilities of key components
- **BlogForm.jsx** — handles user input + form submission  
- **BlogList.jsx** — maps and displays posts  
- **BlogPost.jsx** — shows individual post + delete button  
- **blogApi.js** — mock API to simulate async CRUD requests  

---

## ▶️ How to Run

```bash
npm install
npm run dev

💡 What I Learned

Handling API calls using async/await

Building reusable, isolated components

Managing local state for lists of items

Implementing Loading + Error UI states

Structuring a small React project

Working with controlled form inputs

These skills map directly to real front-end development tasks used in Australian companies (forms, CRUD, async UI, error handling).

🛠️ Potential Improvements

Add edit/update functionality

Add form validation with better UX

Persist posts using localStorage

Add optimistic updates

Introduce React Query or Context for state management
