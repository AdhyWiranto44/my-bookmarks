const Connection = require("../database/connection");
const Favorite = require("../models/favorite");
const { DataTypes, Op } = require("sequelize");


class FavoriteRepository {

  connection = null;

  constructor() {
    this.connection = Connection.init();
  }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const favorites = await Favorite(this.connection, DataTypes)
      .findAll({
        where: {
          ...filter
        }, limit: limit, offset: skip,
        order: [['createdAt', 'DESC']]
      });

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