const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findByEmail,
  update,
  remove
};

function find(id) {
  return id
    ? db("users")
        //only return the username and the password
        .select("username", "id")
        .where({ id })
        .first()
    : //if no id is given, return the entire array of users
      db("users").select("username", "password");
}

function findByEmail(filter) {
  //needs to be a filter OBJECT
  console.log("searching db with this username", filter);
  return db("users")
    .select("username", "password", "id")
    .where(filter)
    .first();
}

function add(user) {
  return db("users")
    .insert(user)
    .then(([id]) => find(id));
}

// https://knexjs.org/#Builder-update
// add additional logic to double check one more time before updating
function update(user, id) {
  return db("users")
    .where({ id })
    .update(user)
    .then(() => find(id));
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
