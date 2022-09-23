const Connection = require("../database/connection");
const Bookmark = require("../models/bookmark");
const { DataTypes, Op } = require("sequelize");


class BookmarkRepository {

  connection = null;

  constructor() {
    this.connection = Connection.init();
  }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const bookmarks = await Bookmark(this.connection, DataTypes)
      .findAll({
        where: {
          ...filter,
          description: {
            [Op.like]: filter.description !== undefined ? `%${filter.description}%` : `%`
          }
        }, limit: limit, offset: skip,
        order: [['createdAt', 'DESC']]
      });

    return bookmarks;
  }

  async getOne(slug) {
    const bookmark = await Bookmark(this.connection, DataTypes)
      .findOne({
        where: { slug }
      });

    return bookmark;
  }

  async insertOne(bookmark) {
    await Bookmark(this.connection, DataTypes)
      .create(
        { ...bookmark, createdAt: new Date(), updatedAt: new Date() }
      );

    const created = await Bookmark(this.connection, DataTypes)
      .findOne(
        { where: { slug: bookmark.slug } }
      );

    return created;
  }

  async update(slug, bookmark) {
    await Bookmark(this.connection, DataTypes)
      .update(
        { ...role, updatedAt: new Date() },
        {
          where: { slug: slug }
        });

    const updated = await Bookmark(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    return updated;
  }

  async remove(slug) {
    const removed = await Bookmark(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    await Bookmark(this.connection, DataTypes)
      .destroy({
        where: { slug }
      });

    return removed;
  }

}

module.exports = BookmarkRepository;