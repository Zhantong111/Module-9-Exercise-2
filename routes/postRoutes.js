let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getPost(res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deletePost(req, res);
});

module.exports = router;
