const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.getVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js: ", rows);
    callback(rows);
  });
};

exports.createVisitors = (req, res) => {
  conn.query(
    `INSERT INTO visitor (name,comment) VALUES ('${req.query.name}','${req.query.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Visitor.js: ", rows);
    }
  );
};
