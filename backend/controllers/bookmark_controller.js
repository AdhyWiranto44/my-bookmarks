class BookmarkController {
  index(req, res) {
    return res.send("bookmarks");
  }
}

module.exports = BookmarkController;