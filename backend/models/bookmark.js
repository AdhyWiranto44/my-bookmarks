'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookmark.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Bookmark', tableName: 'bookmarks'
  });
  return Bookmark;
};