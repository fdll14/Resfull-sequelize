const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers");
const authMiddleware = require("../helpers/authMiddleware");

foodsRoutes.get("/", authMiddleware.checklogin, foodsControllers.getAllFoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById);
foodsRoutes.delete("/:id", foodsControllers.deleteFoods);
foodsRoutes.put("/:id", foodsControllers.updateFoods);
module.exports = foodsRoutes;