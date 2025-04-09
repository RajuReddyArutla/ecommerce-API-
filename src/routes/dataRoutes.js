const express = require('express');
const router = express.Router();
const { fetchAndStoreProducts } = require('../controllers/dataController');

// GET /api/fetch-products
router.get('/fetch-products', fetchAndStoreProducts);

module.exports = router;
