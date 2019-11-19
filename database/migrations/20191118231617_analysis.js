exports.up = function(knex) {
  return knex.schema.createTable("analysis", analysis => {
    analysis.increments();

    //foreign only works on a pre-existing column
    analysis.integer("user_id");
    analysis
      .foreign("user_id")
      .references("users.id")
      .onUpdate("cascade")
      .onDelete("cascade");

    analysis.integer("photo_id");
    analysis
      .foreign("photo_id")
      .references("photos.id")
      .onUpdate("cascade")
      .onDelete("cascade");

    analysis.varchar("pred1", 255);
    analysis.float("pred1_val");
    analysis.varchar("pred2", 255);
    analysis.float("pred2_val");
    analysis.varchar("pred3", 255);
    analysis.float("pred3_val");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("analysis");
};
