const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));
app.use("/views", express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.set("views", "./views");

const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
