const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  remove
};

// gets the analysis and returns
function find() {}

// gets the add function and returns whatever
function add() {}

// deletes the analysis from the tables
function remove(analysisID) {
  db("analysis").del(id);
}
