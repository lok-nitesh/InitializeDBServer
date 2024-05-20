const express = require("express");
const { open } = require("sqlite");
const app = express();
let db = null;
const dbPath = path.join(__dirname, "goodreads.db");
const initializeDBServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server runnin at localhost:3000");
    });
  } catch (e) {
    console.log(`DB ERROR: ${e.message}`);
    process.exit(1);
  }
};
initializeDBServer();
