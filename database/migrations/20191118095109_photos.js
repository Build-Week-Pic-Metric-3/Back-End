exports.up = function(knex) {
  return knex.schema.createTable("photos", photos => {
    photos.increments();
    photos.varchar("hash", 255).notNullable();
    photos.varchar("source", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("photos");
};
