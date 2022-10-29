const ApiService = require("../services/api_service");
const { StatusCodes } = require("http-status-codes");
const FavoriteService = require("../services/favorite_service");


class FavoriteController {

  async getAll(req, res) {
    const queries = req.query;
    const filter = {}
    const pagination = { "limit": 1, "skip": 0 }

    for (const property in queries) {
      if (property == "limit" || property == "skip") {
        pagination[property] = parseInt(queries[property]);
      } else {
        filter[property] = queries[property];
      }
    }

    try {
      const favorites = await new FavoriteService().getAll(filter, pagination.limit, pagination.skip);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Favorites found.",
        {
          "total": favorites.length,
          "favorites": favorites
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async getOne(req, res) {
    try {
      const favorite = await new FavoriteService().getOne(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Favorite found.",
        {
          "favorite": favorite
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async create(req, res) {
    try {
      const favorite = await new FavoriteService().create(req.body);

      return new ApiService(
        res, StatusCodes.OK, true,
        "New favorite successfully created.",
        {
          "favorite": favorite
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async update(req, res) {
    try {
      const favorite = await new FavoriteService().update(req.body, req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Favorite successfully updated.",
        {
          "favorite": favorite
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async delete(req, res) {
    try {
      const favorite = await new FavoriteService().delete(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Favorite successfully deleted.",
        {
          "favorite": favorite
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

}

module.exports = FavoriteController;