const axios = require('axios');
const { Product } = require('../models/productModel');

const fetchAndStoreProducts = async (req, res) => {
  try {
    const response = await axios.get(process.env.EXTERNAL_API_URL);
    const products = response.data;

    for (const product of products) {
      await Product.findOrCreate({
        where: { id: product.id },
        defaults: {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        },
      });
    }

    return res.status(200).json({ message: 'Products fetched and saved.' });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = {
  fetchAndStoreProducts, // ✅ Make sure this line exists
};
