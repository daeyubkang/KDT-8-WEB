const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getPage", (req, res) => {
  res.render("get");
});

app.get("/resultGet", (req, res) => {
  console.log(req.query);
  res.render("result", { title: "Get방식", userInfo: req.query });
});

app.get("/axios", (req, res) => {
  console.log("back", req.query);
  res.send(req.query);
});

app.get("/postPage", (req, res) => {
  res.render("post");
});

app.post("/resultPost", (req, res) => {
  console.log(req.body);
  res.render("result", { title: "Post방식", userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
