const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/category_controller");


const categoryController = new CategoryController();

router.get("/categories", categoryController.index);


module.exports = router;