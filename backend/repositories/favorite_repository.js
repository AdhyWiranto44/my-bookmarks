const Connection = require("../database/connection");
const Favorite = require("../models/favorite");
const { DataTypes, Op } = require("sequelize");


class FavoriteRepository {

  connection = null;

  constructor() {
    this.connection = Connection.init();
  }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const [favorites, metadata] = await this.connection.query(`SELECT favorites.*, bookmarks.name, bookmarks.slug, bookmarks.category, bookmarks.url, bookmarks.description FROM favorites JOIN bookmarks ON favorites.bookmark = bookmarks.id ORDER BY favorites.createdAt DESC LIMIT ${limit} OFFSET ${skip}`);

    return favorites;
  }

  async getOne(slug) {
    const favorite = await Favorite(this.connection, DataTypes)
      .findOne({
        where: { slug }
      });

    return favorite;
  }

  async insertOne(favorite) {
    await Favorite(this.connection, DataTypes)
      .create(
        { ...favorite, createdAt: new Date(), updatedAt: new Date() }
      );

    const created = await Favorite(this.connection, DataTypes)
      .findOne(
        { where: { slug: favorite.slug } }
      );

    return created;
  }

  async update(slug, favorite) {
    await Favorite(this.connection, DataTypes)
      .update(
        { ...favorite, updatedAt: new Date() },
        {
          where: { slug: slug }
        });

    const updated = await Favorite(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    return updated;
  }

  async remove(slug) {
    const removed = await Favorite(this.connection, DataTypes)
      .findOne(
        { where: { slug } }
      );

    await Favorite(this.connection, DataTypes)
      .destroy({
        where: { slug }
      });

    return removed;
  }

}

module.exports = FavoriteRepository;