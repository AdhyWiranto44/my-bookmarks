var express = require('express');
var router = express.Router();
const bookmarkRouter = require("./bookmark.js");
const categoryRouter = require("./category.js");
const bookmarkCategoryRouter = require("./bookmark_category.js");


router.get("/", (req, res) => {
  res.send("My Bookmarks API Works!");
});
router.use(bookmarkRouter);
router.use(categoryRouter);
router.use(bookmarkCategoryRouter);

module.exports = router;
