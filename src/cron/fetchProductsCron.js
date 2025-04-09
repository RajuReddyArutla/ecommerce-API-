// src/cron/fetchProductsCron.js
const axios = require('axios');
const { Product } = require('../models/productModel');
const { logToFile } = require('../utils/logger');

const fetchAndStoreProducts = async () => {
  console.log(`[CRON] ⏳ Running cron job to fetch products...`);
  logToFile('⏳ Running cron job to fetch products...');

  try {
    const response = await axios.get(process.env.EXTERNAL_API_URL);
    const products = response.data;

    let insertedCount = 0;
    let skippedCount = 0;
    const insertedIds = [];
    const skippedIds = [];

    for (const product of products) {
      const [record, created] = await Product.findOrCreate({
        where: { id: product.id },
        defaults: {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        },
      });

      if (created) {
        insertedCount++;
        insertedIds.push(product.id);
      } else {
        skippedCount++;
        skippedIds.push(product.id);
      }
    }

    console.log(`[CRON] ✅ Fetched ${products.length} products | Inserted: ${insertedCount} | Skipped: ${skippedCount}`);
    logToFile(`✅ Inserted products: ${JSON.stringify(insertedIds)}`);
    logToFile(`⚠️ Skipped existing products: ${JSON.stringify(skippedIds)}`);
    logToFile(`📦 Full API data: ${JSON.stringify(products, null, 2)}`);

  } catch (error) {
    console.error(`[CRON] ❌ Cron Error: ${error.message}`);
    logToFile(`❌ Cron Error: ${error.message}`);
  }
};

module.exports = fetchAndStoreProducts;
