const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

const router = require("./routes/user");
app.use("/", router);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
