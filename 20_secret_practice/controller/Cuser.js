const models = require("../models");
const bcrypt = require("bcrypt");
const saltNumber = 10;
const SECRET = "secretKey";
const jwt = require("jsonwebtoken");

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

exports.get_signup = (req, res) => {
  res.render("index");
};

exports.post_signup = (req, res) => {
  console.log(req.body);
  let pw = bcryptPassword(req.body.password);
  models.Users.create({
    userid: req.body.userid,
    name: req.body.name,
    password: pw,
  }).then(() => {
    res.send({ result: true });
  });
};

exports.get_login = (req, res) => {
  res.render("login");
};

exports.post_login = (req, res) => {
  models.Users.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    const compare = comparePassword(
      req.body.password,
      result.dataValues.password
    );
    let token = "";
    if (compare) {
      const { userid } = req.body;
      token = jwt.sign({ userid }, SECRET);
      console.log(token);
    }
    console.log(result);
    res.send({ data1: compare, data2: result.dataValues.name, data3: token });
  });
};

exports.get_update = (req, res) => {
  res.render("update");
};

exports.post_update = (req, res) => {
  models.Users.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    const compare = comparePassword(
      req.body.password,
      result.dataValues.password
    );
    console.log(result);
    res.send({ data1: compare, data2: result.dataValues.name });
  });
};
