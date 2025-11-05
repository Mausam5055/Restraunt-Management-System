# 🍔 Restaurant Management System

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-000000.svg?logo=express)](https://expressjs.com/)

A full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, shopping cart, online payments via Stripe, and an admin dashboard.

## 🌟 Features

| Feature | Description |
|--------|-------------|
| **User Authentication** | Secure registration and login system with JWT tokens |
| **Shopping Cart** | Add/remove items, adjust quantities, real-time price calculation |
| **Online Payments** | Integrated Stripe payment gateway for secure transactions |
| **Order Tracking** | Real-time order status updates from preparation to delivery |
| **Admin Dashboard** | Manage food items, view orders, update order statuses |
| **Responsive Design** | Mobile-friendly interface for all device sizes |

## 🏗️ Architecture

```mermaid
graph TD
    A[Frontend - User] --> B[Backend API]
    C[Frontend - Admin] --> B
    B --> D[(MongoDB Database)]
    B --> E[Stripe API]
    
    subgraph Client Layer
        A
        C
    end
    
    subgraph Server Layer
        B
    end
    
    subgraph Services
        D
        E
    end
```

## 📁 Project Structure

```
Restaurant-Management-System/
├── frontend/          # User-facing application
├── admin/             # Admin dashboard
├── backend/           # Server logic and API
└── README.md          # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB instance
- Stripe account for payment processing

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/restaurant-management-system.git
   cd restaurant-management-system
   ```

2. **Install dependencies for all modules:**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   
   # Admin
   cd ../admin
   npm install
   ```

3. **Configure environment variables:**
   Copy `.env.example` to `.env` in each directory and update with your credentials.

4. **Run the application:**
   ```bash
   # Start backend server
   cd backend
   npm run server
   
   # Start frontend
   cd ../frontend
   npm run dev
   
   # Start admin panel
   cd ../admin
   npm run dev
   ```

## 📦 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18 | User interface |
| **Frontend** | Vite | Build tool |
| **Frontend** | React Router | Navigation |
| **Admin** | React 18 | Admin dashboard |
| **Admin** | Vite | Build tool |
| **Backend** | Node.js | Runtime environment |
| **Backend** | Express.js | Web framework |
| **Database** | MongoDB | Data storage |
| **Database** | Mongoose | ODM |
| **Authentication** | JWT | Token-based auth |
| **Payments** | Stripe | Payment processing |

## 🖼️ Screenshots

### User Interface
![Home Page](https://github.com/user-attachments/assets/3b0f10b7-dcca-4afd-acaa-61d1cc842406)
![Menu](https://github.com/user-attachments/assets/a1fd233a-20e5-413c-a26a-5b3c553f6570)
![Cart](https://github.com/user-attachments/assets/62979ae3-2876-444c-8982-58e81e682b37)

### Admin Dashboard
![Admin Dashboard](https://github.com/user-attachments/assets/1e013722-1b11-4f66-b53a-9f5ef7325943)
![Food Management](https://github.com/user-attachments/assets/86865f6f-6bdf-4581-8089-23e3c03af013)
![Order Management](https://github.com/user-attachments/assets/021a5175-87bf-460f-aae7-8198e6d7e890)

## 🔄 Workflow

```mermaid
graph LR
    A[User Registration] --> B{Authentication}
    B -->|Success| C[Browse Menu]
    C --> D[Add to Cart]
    D --> E[Checkout]
    E --> F[Payment Processing]
    F --> G[Order Confirmation]
    G --> H[Order Tracking]
    
    I[Admin Login] --> J{Authentication}
    J -->|Success| K[Dashboard]
    K --> L[Manage Food Items]
    K --> M[View Orders]
    M --> N[Update Status]
```

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | User registration |
| POST | `/api/user/login` | User login |
| GET | `/api/food/list` | Get all food items |
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/order/place` | Place order |
| GET | `/api/order/userorders` | Get user orders |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mausam Kar**
- Portfolio: [mausam03.vercel.app](https://mausam03.vercel.app)
- GitHub: [@mausam03](https://github.com/mausam03)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the frontend library
- [Node.js](https://nodejs.org/) for the runtime environment
- [MongoDB](https://www.mongodb.com/) for the database
- [Stripe](https://stripe.com/) for payment processing