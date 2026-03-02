# 🚀 Task Manager - Full Stack Application

A full-stack Task Management application built using:

- 🧠 Spring Boot (Backend)
- 🐘 PostgreSQL (Database)
- ⚛️ React + Vite (Frontend)
- 🔗 REST APIs
- 📦 Maven

---

## 📌 Project Overview

This is a simple and clean task management system where users can:

- ✅ Create new tasks
- 📋 View all tasks
- 🔄 Update task status (Pending / Completed)
- ❌ Delete tasks
- 📊 View Pending & Completed task count

The project demonstrates complete full-stack integration between frontend and backend.

---

## 🏗️ Architecture

Frontend (React - Port 5174)
        ↓
Backend (Spring Boot - Port 8081)
        ↓
PostgreSQL Database

---

## 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot 4
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

### Frontend
- React (Vite)
- Fetch API
- CSS (Responsive UI)

---

## 📂 Project Structure


taskmanager/
│
├── taskmanager/ # Backend (Spring Boot)
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── model/
│ ├── exception/
│ ├── config/
│ └── application.properties
│
├── taskmanager-frontend/ # Frontend (React)
│ ├── src/
│ ├── App.jsx
│ └── package.json
│
└── README.md


---

## ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Create Database in PostgreSQL

```sql
CREATE DATABASE task_manager;
2️⃣ Configure application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/task_manager
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
server.port=8081
3️⃣ Run Backend
cd taskmanager
./mvnw spring-boot:run

Backend runs at:

http://localhost:8081

Test API:

http://localhost:8081/api/tasks
💻 Frontend Setup (React)
1️⃣ Install dependencies
cd taskmanager-frontend
npm install
2️⃣ Run frontend
npm run dev

Frontend runs at:

http://localhost:5174
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/{id}	Get task by ID
POST	/api/tasks	Create task
PUT	/api/tasks/{id}	Update task
DELETE	/api/tasks/{id}	Delete task
⚠️ Error Handling Implemented

✅ Custom Exception: TaskNotFoundException

✅ Global Exception Handler

✅ Validation Handling

✅ Proper HTTP status codes

🔒 CORS Configuration

CORS is configured using a global configuration class:

CorsConfig.java

Allows frontend (localhost:5174) to communicate with backend.

🎨 Features

Responsive UI

Clean modern design

Task status toggle

Real-time refresh

Backend validation

Exception handling

📸 Screenshots

<img width="1898" height="946" alt="Screenshot (521)" src="https://github.com/user-attachments/assets/51a106c2-029a-4115-928b-8c2f69af8854" />
<img width="1800" height="984" alt="Screenshot (522)" src="https://github.com/user-attachments/assets/e0f0101b-71c6-4e85-8363-3646211ec447" />


Example:

🎥 Demo Video

(Add your project demo video link here)

📈 Future Improvements

🔐 Add Authentication (JWT)

📝 Add User-based Tasks

📊 Add Pagination

🌍 Deploy to Cloud

🐳 Dockerize the project

👩‍💻 Author

Laxmi Kumari

⭐ If you like this project

Give it a ⭐ on GitHub!
