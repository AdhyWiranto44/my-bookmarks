const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/category_controller");


const categoryController = new CategoryController();

router.get("/categories", categoryController.getAll);
router.get("/categories/:slug", categoryController.getOne);
router.post("/categories", categoryController.create);
router.patch("/categories/:slug", categoryController.update);
router.delete("/categories/:slug", categoryController.delete);


module.exports = router;