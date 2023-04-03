const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define a Tag model (table) by extending Sequelize's Model class

class Tag extends Model {}

// Initialize the Tag model's attributes and configuration options

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
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

    modelName: 'tag',
  }
);

module.exports = Tag;