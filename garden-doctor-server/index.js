const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS오류방지
app.use(cors());

//router 분리
const sign = require("./routes/sign.js");
app.use("/sign", sign);

//오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
