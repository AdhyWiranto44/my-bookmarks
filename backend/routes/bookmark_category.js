const express = require("express");
const router = express.Router();
const BookmarkCategoryController = require("../controllers/bookmark_category_controller");


const bookmarkCategoryController = new BookmarkCategoryController();

router.get("/bookmark_category", bookmarkCategoryController.index);


module.exports = router;