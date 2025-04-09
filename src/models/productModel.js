const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  price: DataTypes.FLOAT,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
}, {
  timestamps: false, // or true if you want createdAt/updatedAt
  freezeTableName: true, // Prevent sequelize from pluralizing table names
});
module.exports = { Product };
