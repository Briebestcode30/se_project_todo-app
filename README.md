# Simple ToDo App

A lightweight, modular, and fully interactive ToDo application built using **vanilla JavaScript**, **OOP**, and **ES6 modules**.  
This project follows strict best practices for clean architecture, form validation, accessibility, and BEM-based file organization.

---

## 🚀 Live Demo (GitHub Pages)

👉 (https://github.com/Briebestcode30/se_project_todo-app/tree/main)

---

## 📌 Project Description

This application allows users to create, manage, and delete to-do tasks in a clean and intuitive interface.  
It demonstrates modern JavaScript development techniques such as:

- Component-based architecture
- Class-based OOP
- Modular file structure
- Real-time form validation
- Dynamically generated DOM elements
- UUID-based item identification

---

## ✨ Features

- ➕ Add new to-do items
- 🗑 Delete existing tasks
- ✔ Mark tasks as completed or uncompleted
- 📅 Optional due dates for each task
- 🔢 Automatic unique IDs using the **uuid** library
- 🧩 Clean OOP with **Todo** and **FormValidator** classes
- 🎯 Real-time form validation with error messages
- 🧼 Automatic form reset on successful submission
- ♿ Accessible controls & keyboard support

---

## 🗂 Folder Structure

se_project_todo-app
│
├── blocks/ # BEM block styles
│
├── components/ # JS classes (Todo, FormValidator)
│ ├── FormValidator.js
│ └── Todo.js
│
├── images/ # Project images and icons
│
├── pages/ # Page-specific scripts + styles
│ ├── index.css
│ └── index.js
│
├── scripts/ # Legacy/extra scripts (validate.js)
│ └── validate.js
│
├── utils/ # Shared configuration + constants
│ └── constants.js
│
├── vendor/ # Optional external libraries
│
├── .gitignore
├── favicon.ico
├── index.html
└── README.md
