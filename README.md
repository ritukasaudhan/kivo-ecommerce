# Kivo E-Commerce

A modern and responsive e-commerce web application built with React.js and Vite, featuring product browsing, shopping cart management, wishlist functionality, and persistent data using Local Storage.

## Features

- Responsive e-commerce interface
- Dynamic product listing
- Product search and category filtering
- Product sorting by price, rating, and featured status
- Shopping cart functionality
- Increase and decrease product quantity
- Remove products from cart
- Dynamic subtotal and total calculation
- Wishlist functionality
- Add and remove products from wishlist
- Add wishlist products directly to cart
- Local Storage for persistent cart and wishlist data
- Responsive mobile navigation
- Multi-page navigation using React Router
- Contact form with validation

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- React Router
- Lucide React

### State & Storage
- React Hooks
- Local Storage

### Development Tools
- Visual Studio Code
- Git
- GitHub

## Project Overview

Kivo E-Commerce is a responsive front-end shopping application designed to provide a smooth and user-friendly online shopping experience.

The application allows users to browse products, search and filter products, manage their shopping cart, save products to a wishlist, and retain cart and wishlist data using Local Storage.

The project was developed using React.js with reusable components and React Router for multi-page navigation.

## Project Structure

```text
kivo_ecom/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   │
│   ├── data/
│   │   ├── products.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ritukasaudhan/kivo-ecommerce.git
cd kivo-ecommerce

npm install

npm run dev

http://localhost:5173

npm run build

## Future Improvements

The following features can be added in future versions:

- Backend integration with Node.js and Express
- Database integration for products and users
- User authentication and account management
- Online payment gateway integration
- Real-time order processing and tracking
- Admin dashboard for product and order management
- Integration with a real product API
- Email notifications for orders and contact requests

## Author

**Ritu Kasaudhan**

- GitHub: https://github.com/ritukasaudhan
- LinkedIn: https://www.linkedin.com/in/ritu-kasaudhan