# Task Manager Application

This is a full-stack Task Manager application designed to manage tasks efficiently. The application includes a backend server for API endpoints and a frontend client for user interactions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

---

## Features
- User Authentication (Registration & Login)
- Add, Update, Mark Complete, and Delete Tasks
- View Task List
- Responsive Design

---

## Technologies Used
### Backend:
- Node.js
- Express
- MongoDB (Mongoose)
- bcrypt (for password hashing)

### Frontend:
- Angular
- Bootstrap
- RxJS

---

## Getting Started
Follow these steps to set up and run the Task Manager application.

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- npm (Node Package Manager)
- MongoDB (ensure it is running locally or provide a connection string)
- Angular CLI

---

## Backend Setup
1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` File:**
   Add a `.env` file in the `backend` directory with the following content:
   ```env
   PORT=4800
   MONGO_URI=your_mongo_connection_string
   ```

4. **Start the Backend Server:**
   ```bash
   npm start
   ```

5. **Verify the Server is Running:**
   Visit `http://localhost:4800` to check if the server is running. Use tools like Postman to test the API endpoints.

---

## Frontend Setup
1. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Update API URLs:**
   Ensure the API URLs in the Angular services are pointing to `http://localhost:4800` (or your backend URL).

4. **Start the Angular Development Server:**
   ```bash
   ng serve
   ```

5. **Access the Application:**
   Open your browser and go to `http://localhost:4200`.

---

## Usage
1. **Register a New User:**
   Use the "Register" page to create a new account.

2. **Login:**
   Log in with your username and password.

3. **Manage Tasks:**
   - Add new tasks
   - Mark tasks as complete
   - Edit tasks
   - Delete tasks

---

## API Endpoints
### Authentication:
- **POST** `/register` - Register a new user
- **POST** `/login` - Login with username and password

### Tasks:
- **GET** `/tasks` - Get all tasks
- **POST** `/tasks` - Add a new task
- **PUT** `/tasks/:id` - Update a task
- **PATCH** `/tasks/:id` - Mark a task as complete
- **DELETE** `/tasks/:id` - Delete a task

---

## Troubleshooting
- **Backend Server Issues:**
  - Ensure MongoDB is running.
  - Check the `.env` file for correct configurations.

- **Frontend Issues:**
  - Ensure the Angular CLI is installed.
  - Check the API service URLs.

- **Authentication Issues:**
  - Ensure bcrypt is installed and working.
  - Debug JWT token handling.

---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any feature additions or bug fixes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
