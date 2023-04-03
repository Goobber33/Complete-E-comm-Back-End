
// Import necessary dependencies

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create a Category model class that extends the Sequelize Model class

class Category extends Model {}

// Initialize the Category model's attributes and configuration options

Category.init(
  {
    // Define the "id" attribute with INTEGER data type as primary key that auto-increments and cannot be null

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Define the "category_name" attribute with STRING data type that cannot be null

    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
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

    modelName: 'category',
  }
);

// Export the Category model for use in other parts of the application

module.exports = Category;
