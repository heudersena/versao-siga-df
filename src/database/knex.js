const path = require("path");
const knex = require("knex");

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite3"),
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "migrations",
    directory: path.resolve(__dirname, "migrations"),
  },
});

module.exports = connection;
