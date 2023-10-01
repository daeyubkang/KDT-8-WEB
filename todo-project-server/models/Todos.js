const { DataTypes } = require("sequelize");

const Model = (sequelize) => {
  return sequelize.define("Todos", {
    //컬럼 정의
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //NOT NULL
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
    },
  });
};

module.exports = Model;
