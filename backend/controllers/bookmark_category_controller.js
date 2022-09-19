const ApiService = require("../services/api_service");
const { StatusCodes } = require("http-status-codes");
const BookmarkCategoryService = require("../services/bookmark_category_service");


class BookmarkController {

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
      const bookmark_categories = await new BookmarkCategoryService().getAll(filter, pagination.limit, pagination.skip);

      return new ApiService(
        res, StatusCodes.OK, true,
        "BookmarkCategories found.",
        {
          "total": bookmark_categories.length,
          "bookmarkCategories": bookmark_categories
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async getOne(req, res) {
    try {
      const bookmarkCategory = await new BookmarkCategoryService().getOne(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "BookmarkCategory found.",
        {
          "bookmarkCategory": bookmarkCategory
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async create(req, res) {
    try {
      const bookmarkCategory = await new BookmarkCategoryService().create(req.body);

      return new ApiService(
        res, StatusCodes.OK, true,
        "New bookmarkCategory successfully created.",
        {
          "bookmarkCategory": bookmarkCategory
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async update(req, res) {
    try {
      const bookmarkCategory = await new BookmarkCategoryService().update(req.body, req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "BookmarkCategory successfully updated.",
        {
          "bookmarkCategory": bookmarkCategory
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async delete(req, res) {
    try {
      const bookmarkCategory = await new BookmarkCategoryService().delete(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "BookmarkCategory successfully deleted.",
        {
          "bookmarkCategory": bookmarkCategory
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

}

module.exports = BookmarkController;