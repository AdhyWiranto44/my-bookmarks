const ApiService = require("../services/api_service");
const { StatusCodes } = require("http-status-codes");
const CategoryService = require("../services/category_service");


class CategoryController {

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
      const categories = await new CategoryService().getAll(filter, pagination.limit, pagination.skip);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Categories found.",
        {
          "total": categories.length,
          "categories": categories
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async getOne(req, res) {
    try {
      const category = await new CategoryService().getOne(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Category found.",
        {
          "category": category
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async create(req, res) {
    try {
      const category = await new CategoryService().create(req.body);

      return new ApiService(
        res, StatusCodes.OK, true,
        "New category successfully created.",
        {
          "category": category
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async update(req, res) {
    try {
      const category = await new CategoryService().update(req.body, req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Category successfully updated.",
        {
          "category": category
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

  async delete(req, res) {
    try {
      const category = await new CategoryService().delete(req.params.slug);

      return new ApiService(
        res, StatusCodes.OK, true,
        "Category successfully deleted.",
        {
          "category": category
        }
      ).sendResponse();
    } catch (err) {
      return new ApiService(res).sendErrorResponse(err);
    }
  }

}

module.exports = CategoryController;