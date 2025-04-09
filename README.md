# 🛒 Ecommerce API

A simple eCommerce backend built using **Node.js**, **Express**, **Sequelize**, and **MariaDB**.  
It fetches product data from an external API using a **cron job** and stores it in the database.

---

## 🚀 Features

- REST API setup using **Express**
- Sequelize ORM with **MariaDB**
- **Cron Job** (runs every minute) to fetch products
- Product data is stored uniquely using `findOrCreate`
- Logger writes all cron activities to `logs/cron.log`
- `.env` support for configuration

---

## 📁 Project Structure

ecommerce-api/ │ ├── src/ │ ├── config/ │ │ └── db.js │ ├── models/ │ │ └── productModel.js │ ├── utils/ │ │ └── logger.js │ ├── cron/ │ │ └── fetchProductsCron.js │ └── app.js │ ├── logs/ │ └── cron.log ├── .env ├── package.json └── README.md



---

## 🔐 `.env` File

```env
PORT=5000

# MariaDB Configuration
DB_NAME=test_db
DB_USER=root
DB_PASS=your_password
DB_HOST=localhost

# External API
EXTERNAL_API_URL=https://fakestoreapi.com/products
