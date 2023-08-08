const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// exports.getuser = (id, callback) => {
//   console.log("방명록 하나 조회");
//   const query = `select * from user where id=${id}`;
//   conn.query(query, (err, rows) => {
//     console.log("user:", rows);
//     if (err) {
//       console.log(err);
//       return;
//     }
//     callback(rows);
//   });
// };

exports.postSignup = (data, callback) => {
  console.log("회원정보 추가");
  const query = `insert into user2 (userid, name, pw) values('${data.userid}','${data.name}', '${data.pw}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postSignin = (data, callback) => {
  console.log("회원정보 조회");
  const query = `select * from user2 where userid='${data.userid}' and pw='${data.pw}' and name='${data.name}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postProfile = (data, callback) => {
  console.log("회원정보 조회");
  const query = `select * from user2 where userid=${data.userid}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postEdit = (data, callback) => {
  console.log("방명록 하나 수정");
  const query = `update user2 set userid='${data.userid}', name='${data.name}', pw='${data.pw}' where id ='${data.id}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};

exports.postDelete = (data, callback) => {
  console.log("방명록 하나 삭제");
  const query = `delete from user2 where userid='${data.userid}' and name='${data.name}' and pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(rows);
  });
};
