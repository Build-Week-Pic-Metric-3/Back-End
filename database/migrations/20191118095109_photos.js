exports.up = function(knex) {
  return knex.schema.createTable("images", images => {
    images.increments();

    images.varchar("hash", 255).notNullable();

    images.varchar("source", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
