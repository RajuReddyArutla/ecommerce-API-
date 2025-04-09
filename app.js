const express = require('express');
require('dotenv').config();
const { initDB } = require('./src/config/db');

const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('eCommerce API running...');
});

// Start DB connection
initDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
