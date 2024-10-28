// migrations/[timestamp]_create_loans_table.js
exports.up = function (knex) {
  return knex.schema.createTable("loans", (table) => {
    table.increments("id").primary();
    table.string("user_name").notNullable(); // Replace `user_id` with `user_name`
    table
      .integer("book_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("books")
      .onDelete("CASCADE");
    table.timestamp("loan_date").defaultTo(knex.fn.now());
    table.date("due_date").notNullable();
    table.boolean("returned").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("loans");
};
