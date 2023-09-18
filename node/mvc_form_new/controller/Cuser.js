const models = require("../models");
const { Op } = require("sequelize");

exports.main = (req, res) => {
  res.render("index");
};

exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  models.User2.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send({ result: true });
  });
};

exports.getSignin = (req, res) => {
  res.render("signin");
};

exports.findAll = (req, res) => {
  models.User2.findAll({
    attribute: ["name", "userid"],
    where: { id: { [Op.gte]: 4 } },
  }).then((result) => {
    console.log("result", result);
    res.send(result);
  });
};

exports.postSignin = (req, res) => {
  console.log(req.body);
  models.User2.findOne({
    where: { userid: req.body.userid, name: req.body.name, pw: req.body.pw },
  }).then((rows) => {
    console.log("123123123", rows);
    if (rows == null) {
      res.send({ result: false });
    } else {
      console.log(rows.dataValues);
      res.send({ result: true, result2: rows.dataValues });
    }
  });
};

exports.getProfile = (req, res) => {
  res.render("profile", { data: req.query });
};

exports.postProfile = (req, res) => {
  res.render("profile", { data: req.body });
};

exports.postEdit = (req, res) => {
  models.User2.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send({ result: true });
  });
};

exports.postDelete = (req, res) => {
  models.User2.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send({ result: true });
  });
};
