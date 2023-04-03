// Import necessary dependencies from Sequelize library

const { Model, DataTypes } = require('sequelize');

// Import the database connection from connection.js file

const sequelize = require('../config/connection');

// Define a Product model (table) by extending Sequelize's Model class

class Product extends Model { }

// Initialize the Product model's attributes and configuration options

Product.init(
  {
    // Define the "id" attribute with INTEGER data type as primary key that auto-increments and cannot be null

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Define the "product_name" attribute with STRING data type that cannot be null

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Define the "price" attribute with DECIMAL data type that cannot be null and must be a valid decimal number

    price: {
      type: DataTypes.INTEGER(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },

    // Define the "stock" attribute with INTEGER data type that cannot be null, has a default value of 10, and must be a valid number

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },

    // Define the "category_id" attribute with INTEGER data type that references the "id" column of the "category" table

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
