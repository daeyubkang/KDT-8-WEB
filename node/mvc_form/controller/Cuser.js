const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  User.postSignup(req.body, () => {
    res.send({ result: true });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  User.postSignin(req.body, (rows) => {
    console.log("123123123", rows.length);
    if (rows.length == 0) {
      res.send({ result: false });
    } else {
      console.log(rows);
      res.send({ result: true, result2: rows });
    }
  });
};

exports.getProfile = (req, res) => {
  console.log("qwe");
  console.log(req.query);
  res.render("profile", { data: req.query });
};

exports.postProfile = (req, res) => {
  res.render("profile", { data: req.body });
};

exports.postEdit = (req, res) => {
  User.postEdit(req.body, () => {
    res.send({ result: true });
  });
};

exports.postDelete = (req, res) => {
  User.postDelete(req.body, (qwe) => {
    console.log(qwe.affectedRows);
    res.send({ result: qwe.affectedRows });
  });
};
