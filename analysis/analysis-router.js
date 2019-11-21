const router = require("express").Router();
const analysisDB = require("../analysis/analysis-model");
const authenticate = require("../auth/authentication-middleware");

//returns all analysis by a user as an array
router.get("/", authenticate, (req, res) => {
  console.log("made it to the all analysis endpoint");
  const { id } = req.decodedJwt;
  analysisDB
    .findAllByUserID(id)
    .then(analysis => res.status(200).json(analysis))
    .catch(err =>
      res.status(500).json({ message: "Internal error fetching analysis" })
    );
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
      .then(added => {
        console.log("this is what was added", added);
        res.status(200).json(added);
      })
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
