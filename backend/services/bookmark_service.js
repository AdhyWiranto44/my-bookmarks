const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const BookmarkRepository = require('../repositories/bookmark_repository');


class BookmarkService {

  constructor() { }

  async getAll(filter = {}, limit = 1, skip = 0) {
    const bookmarks = await new BookmarkRepository().getAll(filter, limit, skip);

    if (bookmarks.length < 1) throw createError(StatusCodes.NOT_FOUND, "Bookmarks empty.");

    return bookmarks;
  }

  async getOne(slug = "") {
    const bookmark = await new BookmarkRepository().getOne(slug);

    if (bookmark == null) throw createError(StatusCodes.NOT_FOUND, "Bookmark not found.");

    return bookmark;
  }

  async create(newBookmark) {
    if (Object.keys(newBookmark).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    newBookmark["slug"] = newBookmark.name.replace(/\s+/g, '-').toLowerCase();
    const bookmark = await new BookmarkRepository().insertOne(newBookmark);

    return bookmark;
  }

  async update(updateBookmark, slug) {
    if (Object.keys(updateBookmark).length === 0) {
      throw createError(StatusCodes.BAD_REQUEST, "Data can't be empty.");
    }

    const bookmark = await new BookmarkRepository().update(slug, updateBookmark);
    if (bookmark == null) throw createError(StatusCodes.BAD_REQUEST, "Bookmark not found.");

    return bookmark;
  }

  async delete(slug) {
    const bookmark = await new BookmarkRepository().remove(slug);

    return bookmark;
  }
}

module.exports = BookmarkService;