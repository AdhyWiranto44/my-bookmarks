const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const CategoryRepository = require('../repositories/category_repository');


class CategoryService {

  constructor() { }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const categories = await new CategoryRepository().getAll(filter, limit, skip);

    if (categories.length < 1) throw createError(StatusCodes.NOT_FOUND, "categories empty.");

    return categories;
  }

  async getOne(slug = "") {
    const category = await new CategoryRepository().getOne(slug);

    if (category == null) throw createError(StatusCodes.NOT_FOUND, "Category not found.");

    return category;
  }

  async create(newCategory) {
    if (Object.keys(newCategory).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    newCategory["slug"] = newCategory.name.replace(/\s+/g, '-').toLowerCase();
    const category = await new CategoryRepository().insertOne(newCategory);

    return category;
  }

  async update(updateCategory, slug) {
    if (Object.keys(updateCategory).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    const category = await new CategoryRepository().update(slug, updateCategory);
    if (category == null) throw createError(StatusCodes.BAD_REQUEST, "category not found.");

    return category;
  }

  async delete(slug) {
    const category = await new CategoryRepository().remove(slug);

    return category;
  }
}

module.exports = CategoryService;