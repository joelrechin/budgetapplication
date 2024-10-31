const sqlite = require("better-sqlite3-with-prebuilds");

const db = new sqlite("../../budget.db");
exports.db = db;