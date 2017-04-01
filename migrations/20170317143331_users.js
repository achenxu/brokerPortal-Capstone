/* eslint-disable max-len */

exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email')
      .notNullable()
      .defautTo('')
      .unique();
    table.specificType('hashed_password', 'char(60)')
      .notNullable();
    table.integer('clicks')
      .defaultTo(0);
    table.integer('convergence')
      .defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
