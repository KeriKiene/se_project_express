const router = require("express").Router();

router.get("/items", () => console.log("GET items"));
router.post("/items", () => console.log("POST items"));
router.delete("/items/:itemId", () => console.log("DELETE items by ID"));

module.exports = router;
