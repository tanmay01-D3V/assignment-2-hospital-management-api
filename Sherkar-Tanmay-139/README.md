# Hospital Management API

A full-stack Hospital Management System with a Node.js/Express backend API and a React frontend, featuring user authentication and CRUD operations for hospitals.

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: Passport.js (local strategy) + bcryptjs

### Frontend
- **Framework**: React 19 (Vite)
- **Routing**: React Router v7
- **State**: React Context API

## Project Structure

```
├── Backend/
│   ├── Config/
│   │   ├── db.js              # MongoDB connection
│   │   └── passport.js        # Passport local strategy config
│   ├── Controllers/
│   │   ├── authcontroller.js   # Register, login, logout logic
│   │   └── hospitalscontroller.js  # Hospital CRUD logic
│   ├── Models/
│   │   ├── user.js             # User model (MongoDB driver)
│   │   └── hospitals.js        # Hospital model (MongoDB driver)
│   ├── Router/
│   │   ├── auth_router.js      # /auth routes
│   │   └── hospitals_router.js # /hospitals routes
│   ├── server.js               # Express app entry point
│   ├── package.json
│   └── .env                    # Environment variables (not committed)
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── HospitalCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── HospitalForm.jsx
│   │   ├── api.js              # API client utility
│   │   ├── App.jsx             # Routes setup
│   │   └── main.jsx            # React entry point
│   ├── package.json
│   └── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd Backend
npm install
```

Start the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```


## API Endpoints

### Authentication

| Method | Endpoint         | Description          | Body                                    |
|--------|------------------|----------------------|-----------------------------------------|
| POST   | `/auth/register` | Register a new user  | `{ username, email, password }`         |
| POST   | `/auth/login`    | Login                | `{ username, password }`                |
| POST   | `/auth/logout`   | Logout               | -                                       |

### Hospitals

| Method | Endpoint          | Description          | Body                                                    |
|--------|-------------------|----------------------|----------------------------------------------------------|
| GET    | `/hospitals`      | Get all hospitals    | -                                                        |
| GET    | `/hospitals/:id`  | Get hospital by ID   | -                                                        |
| POST   | `/hospitals`      | Create a hospital    | `{ name, address, phone, specialties, ... }`            |
| PUT    | `/hospitals/:id`  | Update a hospital    | `{ name, address, phone, specialties, ... }`            |
| DELETE | `/hospitals/:id`  | Delete a hospital    | -                                                        |

## Frontend Routes

| Path                 | Description              | Auth Required |
|----------------------|--------------------------|---------------|
| `/login`             | Login page               | No            |
| `/register`          | Registration page        | No            |
| `/`                  | Dashboard (hospitals)    | Yes           |
| `/hospitals/new`     | Add new hospital form    | Yes           |
| `/hospitals/:id/edit`| Edit hospital form       | Yes           |
