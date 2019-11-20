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

    analysis.varchar("source").notNullable();

    analysis.string("reznet");

    analysis.string("yolov3");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("analysis");
};
