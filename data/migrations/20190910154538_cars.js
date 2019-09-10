exports.up = function(knex) {
  return knex.schema.createTable('cars', function (table) {
    // id
    table.increments();

    // VIN
    table.integer('VIN').unique().notNullable();

    // make
    table.string('make').notNullable();

    // model
    table.string('model').notNullable();

    // mileage
    table.decimal('mileage').notNullable();

    // transmission type (not required)


    // title status (not required)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
