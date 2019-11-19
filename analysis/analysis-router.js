const router = require("express").Router();
const users = require("../users/users-model");

router.get("/", (req, res) => {
  res.send("analysis api");
});

module.exports = router;
