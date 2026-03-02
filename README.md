# 🚀 Task Manager Backend (Spring Boot + PostgreSQL)

A RESTful Task Management API built using **Java Spring Boot** and **PostgreSQL**.

This project demonstrates:

- Clean layered architecture (Controller → Service → Repository)
- REST API design
- Exception handling
- Validation
- CORS configuration
- Database integration using JPA & Hibernate

---

## 📌 Project Overview

This backend application provides APIs to manage tasks.

Users can:

- Create a task
- Fetch all tasks
- Fetch task by ID
- Update a task
- Delete a task
- Handle errors gracefully

This project follows standard backend best practices.

---

## 🏗️ Architecture (Layered Design)

Controller Layer  
Handles HTTP requests & responses  

Service Layer  
Contains business logic  

Repository Layer  
Handles database operations (JPA)

Database  
PostgreSQL


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

## 🛠️ Tech Stack

- Java 21
- Spring Boot 4
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven
- REST APIs

---

## 📂 Project Structure


taskmanager/
├── controller/
├── service/
├── repository/
├── model/
├── exception/
├── config/
├── TaskmanagerApplication.java
└── application.properties


---

## 📦 Dependencies Used

- spring-boot-starter-web
- spring-boot-starter-data-jpa
- postgresql
- lombok (optional)

---

## ⚙️ Database Configuration

### 1️⃣ Create Database

```sql
CREATE DATABASE task_manager;
2️⃣ Configure application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/task_manager
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8081
▶️ How to Run Backend

From project root:

cd taskmanager
./mvnw spring-boot:run

Application runs on:

http://localhost:8081
🌐 REST API Endpoints
✅ Create Task
POST /api/tasks
✅ Get All Tasks
GET /api/tasks
✅ Get Task by ID
GET /api/tasks/{id}
✅ Update Task
PUT /api/tasks/{id}
✅ Delete Task
DELETE /api/tasks/{id}
🧠 Model Design
Task Entity

Fields:

id (Auto-generated)

title (Not Null)

description

status (PENDING / COMPLETED)

Mapped using:

@Entity
@Table(name = "tasks")
⚠️ Exception Handling

Implemented:

Custom Exception → TaskNotFoundException

Global Exception Handler → @RestControllerAdvice

Proper HTTP Status Codes (400, 404)

Example response for invalid ID:

{
  "timestamp": "2026-03-02T14:10:00",
  "status": 404,
  "message": "Task not found with id: 10"
}
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
