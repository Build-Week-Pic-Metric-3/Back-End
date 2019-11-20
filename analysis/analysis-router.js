const router = require("express").Router();
const analysis = require("../analysis/analysis-model");

router.get("/", (req, res) => {
  res.send("analysis api");
});

module.exports = router;
