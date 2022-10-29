const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const FavoriteRepository = require('../repositories/favorite_repository');


class FavoriteService {

  constructor() { }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const favorites = await new FavoriteRepository().getAll(filter, limit, skip);

    if (favorites.length < 1) throw createError(StatusCodes.NOT_FOUND, "Favorites empty.");

    return favorites;
  }

  async getOne(slug = "") {
    const favorite = await new FavoriteRepository().getOne(slug);

    if (favorite == null) throw createError(StatusCodes.NOT_FOUND, "Favorite not found.");

    return favorite;
  }

  async create(newFavorite) {
    if (Object.keys(newFavorite).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    newFavorite["slug"] = newFavorite.name.replace(/\s+/g, '-').toLowerCase();
    const favorite = await new FavoriteRepository().insertOne(newFavorite);

    return favorite;
  }

  async update(updateFavorite, slug) {
    if (Object.keys(updateFavorite).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    const favorite = await new FavoriteRepository().update(slug, updateFavorite);
    if (favorite == null) throw createError(StatusCodes.BAD_REQUEST, "Favorite not found.");

    return favorite;
  }

  async delete(slug) {
    const favorite = await new FavoriteRepository().remove(slug);

    return favorite;
  }
}

module.exports = FavoriteService;