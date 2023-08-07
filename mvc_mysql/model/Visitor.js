const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

exports.getVisitors = (callback) => {
  console.log("방명록 전체 보기");
  const query = `select * from visitor`;
  conn.query(query, (err, rows) => {
    console.log("visitor:", rows);
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.getVisitor = (id, callback) => {
  console.log("방명록 하나 조회");
  const query = `select * from visitor where id=${id}`;
  conn.query(query, (err, rows) => {
    console.log("visitor:", rows);
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  console.log("방명록 하나 추가");
  const query = `insert into visitor (name, comment) values('${data.name}', '${data.comment}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.patchVisitor = (data, callback) => {
  console.log("방명록 하나 수정");
  const query = `update visitor set name='${data.name}', comment='${data.comment}' where id =${data.id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.deleteVisitor = (data, callback) => {
  console.log("방명록 하나 삭제");
  const query = `delete from visitor where id = ${data.id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};
