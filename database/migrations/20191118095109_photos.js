exports.up = function(knex) {
  return knex.schema.createTable("analysis", analysis => {
    analysis.increments();
    analysis.varchar("hash").notNullable();
    analysis.varchar("original").notNullable();

    analysis.integer("user_id");
    analysis
      .foreign("user_id")
      .references("users.id")
      .onUpdate("cascade")
      .onDelete("cascade");

    analysis.string("resnet");
    analysis.string("yolov3");
    analysis.varchar("yolov3_source");
    //faces returns a marked up image, there is no text analysis with it
    analysis.varchar("faces_source");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("analysis");
};
