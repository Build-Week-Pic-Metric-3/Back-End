const db = require("../database/dbConfig");

module.exports = {
  findByUser,
  findById,
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
    .insert(added)
    .then(([id]) => {
      console.log("this is the id of analysis", id);
      findById(id);
    });
}

// retrieves all of the analysis saved by a user
function findByUser() {}

// retrieves the analysis specified, not sure if Frontend needs
function findById(id) {
  return db("analysis")
    .where({ id })
    .first();
}

// deletes the analysis from the tables
function remove(analysisID) {
  db("analysis").del(id);
}
