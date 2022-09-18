const { Sequelize } = require("sequelize");
const { SQLite } = require("sqlite3");

class Connection {
  static connection = null;

  static init() {
    if (Connection.connection === null) {
      Connection.connection = new Sequelize({
        dialect: 'sqlite',
        storage: './my_bookmarks_development.sqlite'
      });

      try {
        Connection.connection.authenticate();
        console.log("Connection has been established successfully.");
      } catch (err) {
        console.error("Unable to connect to the database:", err);
      }
    }

    return Connection.connection;
  }
}

module.exports = Connection;