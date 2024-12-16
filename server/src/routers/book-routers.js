const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
console.log(bookController)

router.post("/", bookController.postData);
router.get("/", bookController.getallbook);
router.get("/:id", bookController.getbyIdbook);
router.get("/:name", bookController.getbyNamebook);
router.patch("/:id", bookController.updatebookbyId);
router.delete("/:id", bookController.deletebookbyId);

module.exports = router;
