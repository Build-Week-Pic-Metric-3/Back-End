const router = require("express").Router();
const authenticate = require("../auth/authentication-middleware");
const users = require("./users-model");

router.get("/", authenticate, (req, res) => {
  const { id } = req.decodedJwt;
  users
    // helper function takes in a filter object
    .find({ id })
    .then(users => res.status(200).json(users))
    .catch(error => {
      console.log(error);
      res.status(500);
    });
});

router.put("/", authenticate, (req, res) => {
  const { id } = req.decodedJwt;
  console.log("this is the id from token", id);
  const updatedUser = req.body;
  console.log("this is the new info", updatedUser);

  bcrypt.hash(password, 12, (err, hash) => {
    users
      .update(updatedUser, id)
      .then(user => res.status(200).json(user))
      .catch(err => {
        console.log("Error when updating internally", err);
        res
          .status(500)
          .json({ message: "Internal error when trying update user." });
      });
  });
});

module.exports = router;
