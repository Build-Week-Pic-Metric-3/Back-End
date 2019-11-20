const db = require("../database/dbConfig");

module.exports = {
  findByUserID,
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
    .insert(added)
    .then(([id]) => findByID(id));
}

// retrieves all of the analysis saved by a user
function findByUserID(user_id) {
  return user_id
    ? db("analysis")
        //only return the username and the password
        .select("id", "hash")
        .where({ user_id })
        .first()
    : //if no id is given, return the entire array of users
      db("analysis").select("id", "hash");
}

// retrieves the analysis specified, not sure if Frontend needs
function findByID(id) {
  return db("analysis")
    .select("id", "hash", "source", "user_id", "resnet", "yolov3")
    .where({ id })
    .first();
}

// deletes the analysis from the tables
function remove(analysisID) {
  db("analysis").del(id);
}
