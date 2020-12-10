const path = require("path");

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite3"),
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "migrations",
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
