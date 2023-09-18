const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("axiosPost");
});

const id = 1234;
const password = 1234;
let result = true;

app.post("/axios", (req, res) => {
  console.log("back", req.body);
  if (req.body.id1 == id && req.body.password1 == password) {
    result = true;
  } else {
    result = false;
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
