const db = require("../database/dbConfig");

module.exports = {
  findAllByUserID,
  findByID,
  add,
  remove
};

// Adds the analysis to the specific user
function add(analysis, userID) {
  const added = {
    ...analysis,
    user_id: userID
  };
  return db("analysis")
    .insert(added, "id")
    .then(([id]) => findByID(id));
}

// retrieves all of the analysis saved by a user
function findAllByUserID(user_id) {
  return db("analysis").where({ user_id });
}

// retrieves the analysis specified, not sure if Frontend needs
function findByID(id) {
  return db("analysis")
    .where({ id })
    .first();
}

// deletes the analysis from the tables
function remove(analysisID) {
  db("analysis").del(id);
}
