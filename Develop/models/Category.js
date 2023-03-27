const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// import necessary models for associations
const Product = require('./Product');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Add associations
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

module.exports = Category;
