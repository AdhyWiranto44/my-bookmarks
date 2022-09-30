const Connection = require("../database/connection");
const Category = require("../models/category");
const { DataTypes, Op } = require("sequelize");


class CategoryRepository {

  connection = null;

  constructor() {
    this.connection = Connection.init();
  }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const categories = await Category(this.connection, DataTypes)
      .findAll({
        where: {
          ...filter,
          name: {
            [Op.like]: filter.name !== undefined ? `${filter.name}%` : `%`
          }
        }, limit: limit, offset: skip,
        order: [['createdAt', 'DESC']]
      });

    return categories;
  }

  async getOne(slug) {
    const category = await Category(this.connection, DataTypes)
      .findOne({
        where: { slug }
      });

    return category;
  }

  async insertOne(category) {
    await Category(this.connection, DataTypes)
      .create(
        { ...category, createdAt: new Date(), updatedAt: new Date() }
      );

    const created = await Category(this.connection, DataTypes)
      .findOne(
        { where: { slug: category.slug } }
      );

    return created;
  }

  async update(slug, category) {
    await Category(this.connection, DataTypes)
      .update(
        { ...category, updatedAt: new Date() },
        {
          where: { slug: slug }
        });

    const updated = await Category(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    return updated;
  }

  async remove(slug) {
    const removed = await Category(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    await Category(this.connection, DataTypes)
      .destroy({
        where: { slug }
      });

    return removed;
  }

}

module.exports = CategoryRepository;