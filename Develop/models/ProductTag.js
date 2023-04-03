const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define a ProductTag model (table) by extending Sequelize's Model class

class ProductTag extends Model {}

// Initialize the ProductTag model's attributes and configuration options

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
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

    modelName: 'product_tag',
  }
);

module.exports = ProductTag;