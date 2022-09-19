const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const BookmarkCategoryRepository = require('../repositories/bookmark_category_repository');


class BookmarkService {

  constructor() { }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const bookmarkCategories = await new BookmarkCategoryRepository().getAll(filter, limit, skip);

    if (bookmarkCategories.length < 1) throw createError(StatusCodes.NOT_FOUND, "BookmarkCategories empty.");

    return bookmarkCategories;
  }

  async getOne(slug = "") {
    const bookmarkCategory = await new BookmarkCategoryRepository().getOne(slug);

    if (bookmarkCategory == null) throw createError(StatusCodes.NOT_FOUND, "BookmarkCategory not found.");

    return bookmarkCategory;
  }

  async create(newBookmarkCategory) {
    if (Object.keys(newBookmarkCategory).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    newBookmarkCategory["slug"] = newBookmarkCategory.name.replace(/\s+/g, '-').toLowerCase();
    const bookmarkCategory = await new BookmarkCategoryRepository().insertOne(newBookmarkCategory);

    return bookmarkCategory;
  }

  async update(updateBookmark, slug) {
    if (Object.keys(updateBookmark).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    const bookmarkCategory = await new BookmarkCategoryRepository().update(slug, updateBookmark);
    if (bookmarkCategory == null) throw createError(StatusCodes.BAD_REQUEST, "BookmarkCategory not found.");

    return bookmarkCategory;
  }

  async delete(slug) {
    const bookmarkCategory = await new BookmarkCategoryRepository().remove(slug);

    return bookmarkCategory;
  }
}

module.exports = BookmarkService;