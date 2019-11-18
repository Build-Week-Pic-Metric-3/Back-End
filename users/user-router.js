const router = require("express").Router();

const users = require("./users-model");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  users
    .find(id)
    .then(users => res.status(200).json(users))
    .catch(error => {
      console.log(error);
      res.status(500);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  users
    .update(updatedUser, id)
    .then(user => res.status(200).json(user))
    .catch(() =>
      res
        .status(500)
        .json({ message: "Internal error when trying update user." })
    );
});

module.exports = router;
