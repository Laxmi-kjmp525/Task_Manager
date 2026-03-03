
🚀 Task Manager – Full Stack Application

A simple and responsive Task Management application built using Spring Boot, PostgreSQL, and React.

This project demonstrates full-stack development with clean architecture, REST APIs, exception handling, and modern UI design.

<img width="1898" height="946" alt="Screenshot (521)" src="https://github.com/user-attachments/assets/77aad854-993f-42b0-804b-e1afecc3d9a4" />
<img width="1800" height="984" alt="Screenshot (522)" src="https://github.com/user-attachments/assets/c19618bc-528d-4afa-a8ec-21e52ead954b" />
🛠 Tech Stack
🔹 Backend

Java 21

Spring Boot

Spring Data JPA

PostgreSQL

Maven

🔹 Frontend

React (Vite)

JavaScript (ES6)

CSS (Responsive UI)

✨ Features

Create new tasks

View all tasks

Update task status (Pending / Completed)

Delete tasks

Track Pending & Completed counts

Global Exception Handling

Layered Architecture (Controller → Service → Repository)

CORS Configuration

Responsive and modern UI


---
📂 Project Structure


Task_Manager/
│
├── taskmanager/               # Spring Boot Backend
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── exception/
│   └── config/
│
├── taskmanager-frontend/      # React Frontend
│   ├── src/
│   └── components/

⚙️ Backend Setup (Spring Boot)
1️⃣ Clone the Repository

git clone https://github.com/your-username/Task_Manager.git

cd Task_Manager/taskmanager

2️⃣ Create PostgreSQL Database

Open pgAdmin or PostgreSQL terminal and run:

CREATE DATABASE task_manager;

3️⃣ Configure Database

Open:

src/main/resources/application.properties

Update your database credentials:

spring.datasource.url=jdbc:postgresql://localhost:5432/task_manager
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
server.port=8081


4️⃣ Run Backend

Windows:

.\mvnw.cmd spring-boot:run

Backend will start at:

http://localhost:8081

Test API:

http://localhost:8081/api/tasks
💻 Frontend Setup (React)

Open a new terminal:

cd Task_Manager/taskmanager-frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173

(If 5173 is busy, Vite will automatically choose another port.)

🔗 API Endpoint

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| GET    | /api/tasks      | Get all tasks  |
| GET    | /api/tasks/{id} | Get task by ID |
| POST   | /api/tasks      | Create task    |
| PUT    | /api/tasks/{id} | Update task    |
| DELETE | /api/tasks/{id} | Delete task    |


🧠 Architecture Flow


Client (React/Postman)
↓
Controller
↓
Service
↓
Repository (JPA)
↓
PostgreSQL


---

🌍 CORS Configuration

Global CORS configuration added to allow frontend communication during development.

🧪 API Testing

Tested using:

Postman

Browser

Example:

http://localhost:8081/api/tasks
🎯 Key Backend Concepts Demonstrated

RESTful API Design

Dependency Injection

Layered Architecture

DTO-ready structure

JPA/Hibernate ORM

Exception Handling

Clean Code Structure

📈 Future Improvements

Add DTO layer

Add Validation Annotations

Add Pagination

Add JWT Authentication

Add Unit Tests

Dockerize backend

👩‍💻 Author
Laxmi Kumari

⭐ If you like this project
<img width="1898" height="946" alt="Screenshot (521)" src="https://github.com/user-attachments/assets/77aad854-993f-42b0-804b-e1afecc3d9a4" />

<img width="1800" height="984" alt="Screenshot (522)" src="https://github.com/user-attachments/assets/c19618bc-528d-4afa-a8ec-21e52ead954b" />

video link:  (https://www.loom.com/share/07197cb3fbda4d999beeb13bb94e93cc)

Give it a ⭐ on GitHub.
