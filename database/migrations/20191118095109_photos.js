exports.up = function(knex) {
  return knex.schema.createTable("analysis", analysis => {
    analysis.increments();
    analysis.varchar("hash", 255).notNullable();
    analysis.varchar("source", 255).notNullable();

    analysis.integer("user_id");
    analysis
      .foreign("user_id")
      .references("users.id")
      .onUpdate("cascade")
      .onDelete("cascade");

    analysis.string("resnet");
    analysis.string("yolov3");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("analysis");
};
