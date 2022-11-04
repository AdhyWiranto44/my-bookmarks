const express = require("express");
const router = express.Router();
const BookmarkController = require("../controllers/bookmark_controller");


const bookmarkController = new BookmarkController();

router.get("/bookmarks", bookmarkController.getAll);
router.get("/bookmarks/archive", bookmarkController.getAllArchive);
router.get("/bookmarks/:slug", bookmarkController.getOne);
router.post("/bookmarks", bookmarkController.create);
router.patch("/bookmarks/:slug", bookmarkController.update);
router.delete("/bookmarks/:slug", bookmarkController.delete);


module.exports = router;