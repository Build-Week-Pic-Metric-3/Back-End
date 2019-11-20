const router = require("express").Router();
const authenticate = require("../auth/authentication-middleware");
const users = require("./users-model");
const bcrypt = require("bcryptjs");

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
  const updatedUser = req.body;

  bcrypt.hash(updatedUser.password, 12, (err, hash) => {
    updatedUser.password = hash;
    users
      .update(updatedUser, id)
      .then(user => res.status(200).json(user))
      .catch(err => {
        res
          .status(500)
          .json({ message: "Internal error when trying update user." });
      });
  });
});

module.exports = router;
