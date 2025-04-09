// src/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME ||'test_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mariadb',
    logging: false, // set to console.log to see raw SQL
  }
);

// Function to test DB connection
const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log(`📦 Tables synced to database: ${process.env.DB_NAME}`);

  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
  }
};

module.exports = {
  sequelize,
  initDB,
};
