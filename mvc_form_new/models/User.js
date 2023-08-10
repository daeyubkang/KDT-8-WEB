//User에 대한 테이블 정의
const User2 = function (sequelize, DataTypes) {
  //sequelize는 model/index.js에 있는 sequelize
  //DataTypes는 model/index.js에 있는 Sequelize
  const model = sequelize.define(
    "user2",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user2",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};

module.exports = User2;
