// Import necessary dependencies from Sequelize library

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a Product model (table) by extending Sequelize's Model class

class Product extends Model { }

// Initialize the Product model's attributes and configuration options

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     price: {
      type: DataTypes.INTEGER(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    
    // Set the sequelize instance to use

    sequelize,

    // Disable timestamps for the model

    timestamps: false,

    // Set the table name to be the same as the model name

    freezeTableName: true,

    // Use underscored naming convention for column names

    underscored: true,

    // Set the model name

    modelName: 'product',
  }
);

// Export the Product model for use in other parts of the application

module.exports = Product;
