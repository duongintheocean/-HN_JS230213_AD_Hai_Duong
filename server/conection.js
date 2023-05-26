const mysql = require("mysql");
const conection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "exercise",
  user: "root",
  password: "12345678",
});
conection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("conect successfull");
  }
});
module.exports = conection;
