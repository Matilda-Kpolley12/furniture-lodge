const express = require ("express");
const router = express.Router();
const furnitureController = require ("../controllers/furnitureController");

router
  .route("/")
  .get(furnitureController.allFurnitures)
  .post(furnitureController.createFurniture);

router
  .route("/:postId")
  .get(furnitureController.getFurniture)
  .patch(furnitureController.updateFurniture)
  .delete(furnitureController.deleteFurniture);

export default router;
