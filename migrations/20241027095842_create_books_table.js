// migrations/[timestamp]_create_books_table.js
exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary();
    table.string("title", 100).notNullable();
    table.string("author", 100).notNullable();
    table.integer("year").notNullable(); // Perbaikan tipe data untuk kolom year
    table.boolean("available").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("books");
};
