
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 123234456,
          make: 'Nissan',
          model: 'Maxima',
          mileage: 12345
        }
      ]);
    });
};
