const router = require("express").Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/clothingitems.js");

router.get("/items", () => console.log("GET items"));
router.post("/items", () => console.log("POST items"));
router.delete("/items/:itemId", () => console.log("DELETE items by ID"));

router.post("/items", createItem);

router.get("/", getItems);

router.put("/:itemId", updateItem);

router.delete("/:itemId", deleteItem);

module.exports = router;
