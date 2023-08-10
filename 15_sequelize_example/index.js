const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

const router = require("./routes/student");
app.use("/", router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
