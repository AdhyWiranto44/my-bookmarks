class CategoryController {
  index(req, res) {
    return res.send("categories");
  }
}

module.exports = CategoryController;