//visitor에 대한 테이블 정의
const User = function (sequelize, DataTypes) {
  //sequelize는 model/index.js에 있는 sequelize
  //DataTypes는 model/index.js에 있는 Sequelize
  const model = sequelize.define(
    "userss",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "userss",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User;
