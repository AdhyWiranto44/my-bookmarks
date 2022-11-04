const ApiService = require("../services/api_service");
const { StatusCodes } = require("http-status-codes");
const BookmarkService = require("../services/bookmark_service");


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
      const bookmarks = await new BookmarkService().getAll(filter, pagination.limit, pagination.skip);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Bookmarks found.",
        {
          "total": bookmarks.length,
          "bookmarks": bookmarks
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async getAllArchive(req, res) {
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
      const bookmarks = await new BookmarkService().getAllArchive(filter, pagination.limit, pagination.skip);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Archive found.",
        {
          "total": bookmarks.length,
          "archive": bookmarks
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async getOne(req, res) {
    try {
      const bookmark = await new BookmarkService().getOne(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Bookmark found.",
        {
          "Bookmark": bookmark
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async create(req, res) {
    try {
      const bookmark = await new BookmarkService().create(req.body);

      return new ApiService(
        res, StatusCodes.OK, true,
        "New bookmark successfully created.",
        {
          "bookmark": bookmark
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async update(req, res) {
    try {
      const bookmark = await new BookmarkService().update(req.body, req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Bookmark successfully updated.",
        {
          "bookmark": bookmark
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async delete(req, res) {
    try {
      const bookmark = await new BookmarkService().delete(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Bookmark successfully deleted.",
        {
          "bookmark": bookmark
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

}

module.exports = BookmarkController;