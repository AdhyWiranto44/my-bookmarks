const express = require("express");
const router = express.Router();
const BookmarkController = require("../controllers/bookmark_controller");


const bookmarkController = new BookmarkController();

router.get("/bookmarks", bookmarkController.index);


module.exports = router;