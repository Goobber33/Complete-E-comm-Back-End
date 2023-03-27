const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// import necessary models for associations
const Product = require('./Product');
const ProductTag = require('./ProductTag');

class Tag extends Model {}

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
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Add associations
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products',
  foreignKey: 'tag_id',
});

module.exports = Tag;
