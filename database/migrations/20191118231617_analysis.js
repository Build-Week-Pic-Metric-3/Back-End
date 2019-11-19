exports.up = function(knex) {
  return knex.schema.createTable(analysis => {
    analysis.increments();
    analysis
      .foreign("user_id")
      .references("user.id")
      .onUpdate("cascade")
      .onDelete("cascade");
    analysis
      .foreign("photo_id")
      .references("photo.id")
      .onUpdate("cascade")
      .onDelete("cascade");
    analysis.varchar("pred1", 255);
    analysis.varchar("pred1_val", 255);
    analysis.varchar("pred2", 255);
    analysis.varchar("pred2_val", 255);
    analysis.varchar("pred3", 255);
    analysis.varchar("pred3_val", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("analysis");
};
