let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getComment(res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createComment(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateComment(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteComment(req, res);
});

module.exports = router;
