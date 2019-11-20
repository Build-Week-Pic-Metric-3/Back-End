const router = require("express").Router();
const analysisDB = require("../analysis/analysis-model");
const authenticate = require("../auth/authentication-middleware");

router.get("/", (req, res) => {
  res.send("analysis api");
});

router.post("/", authenticate, (req, res) => {
  const { id } = req.decodedJwt;
  const analysis = req.body;
  if (analysis.error) {
    res.status(400).json({ message: "Cannot save message due to error" });
  } else {
    delete analysis.error;
    analysisDB
      .add(analysis, id)
      .then(added => res.status(200).json(added))
      .catch(err => {
        // error code is only unique to SQLLite, I have no idea what error code or error object Postgres sends, needs more research
        if (err.errno === 19) {
          res.status(500).json({
            message:
              "Internal error, tried to save analysis to a user that does not exist."
          });
        }
        res
          .status(500)
          .json({ message: "Internal error when saving analysis" });
      });
  }
});

module.exports = router;
