//require MYSQL
const mysql = require("mysql");
let connection;
require("dotenv").config();

//connection with JAWSDB
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //create connection with .env
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  });
}

connection.connect((err) => {
  if (err) throw err;
  console.log("DB connected");
});

//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

//export
module.exports = connection;
