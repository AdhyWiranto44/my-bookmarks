const express = require("express");
const router = express.Router();
const BookmarkCategoryController = require("../controllers/bookmark_category_controller");


const bookmarkCategoryController = new BookmarkCategoryController();

router.get("/bookmark_categories", bookmarkCategoryController.getAll);
router.get("/bookmark_categories/:slug", bookmarkCategoryController.getOne);
router.post("/bookmark_categories", bookmarkCategoryController.create);
router.patch("/bookmark_categories/:slug", bookmarkCategoryController.update);
router.delete("/bookmark_categories/:slug", bookmarkCategoryController.delete);


module.exports = router;