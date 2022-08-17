const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: "127.0.0.1",
  port: 5432,
  database: "productfeedback",
});

module.exports = pool;
