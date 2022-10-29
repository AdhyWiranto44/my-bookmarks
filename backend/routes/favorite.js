const express = require("express");
const router = express.Router();
const FavoriteController = require("../controllers/favorite_controller");


const favoriteController = new FavoriteController();

router.get("/favorites", favoriteController.getAll);
router.get("/favorites/:id", favoriteController.getOne);
router.post("/favorites", favoriteController.create);
router.patch("/favorites/:id", favoriteController.update);
router.delete("/favorites/:id", favoriteController.delete);


module.exports = router;