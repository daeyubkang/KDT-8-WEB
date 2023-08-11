"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//model
db.Students = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

//관계 형성
//1:1
db.Students.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Students);

//1:다
db.Students.hasMany(db.Classes);
db.Classes.belongsTo(db.Students);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
