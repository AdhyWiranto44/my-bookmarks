const Connection = require("../database/connection");
const BookmarkCategory = require("../models/bookmarkcategory");
const { DataTypes, Op } = require("sequelize");


class BookmarkCategoryRepository {

  connection = null;

  constructor() {
    this.connection = Connection.init();
  }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const bookmarkCategories = await BookmarkCategory(this.connection, DataTypes)
      .findAll({
        where: {
          ...filter,
          name: {
            [Op.like]: filter.name !== undefined ? `${filter.name}%` : `%`
          }
        }, limit: limit, offset: skip,
        order: [['createdAt', 'DESC']]
      });

    return bookmarkCategories;
  }

  async getOne(slug) {
    const bookmarkCategory = await BookmarkCategory(this.connection, DataTypes)
      .findOne({
        where: { slug }
      });

    return bookmarkCategory;
  }

  async insertOne(bookmarkCategory) {
    await BookmarkCategory(this.connection, DataTypes)
      .create(
        { ...bookmarkCategory, createdAt: new Date(), updatedAt: new Date() }
      );

    const created = await BookmarkCategory(this.connection, DataTypes)
      .findOne(
        { where: { slug: bookmarkCategory.slug } }
      );

    return created;
  }

  async update(slug, bookmarkCategory) {
    await BookmarkCategory(this.connection, DataTypes)
      .update(
        { ...role, updatedAt: new Date() },
        {
          where: { slug: slug }
        });

    const updated = await BookmarkCategory(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    return updated;
  }

  async remove(slug) {
    const removed = await BookmarkCategory(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    await BookmarkCategory(this.connection, DataTypes)
      .destroy({
        where: { slug }
      });

    return removed;
  }

}

module.exports = BookmarkCategoryRepository;