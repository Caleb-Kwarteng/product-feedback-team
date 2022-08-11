// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "12345",
//     host: "127.0.0.1",
//     port: 5432,
//     database: "product-feedback"
// });

// module.exports = pool;

const Pool = require('pg').Pool;

//configures the db we are connecting to
// const pool = new Pool({
//     user: "postgres",
//     password: "root",
//     database: "product-feedback",
//     host: "localhost",
//     port: 5432
// });

// module.exports = pool;

const pool = new Pool({
    user: "postgres",
    password: "root",
    database: "hass-prod-feed",
    host: "localhost",
    port: 5432
});

module.exports = pool;