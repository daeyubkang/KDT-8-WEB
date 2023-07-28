// const express = require("express");
// // import express from "express";

// const app = express();
// const PORT = 8000;

// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   // res.send("Hello express");

//   //render() 뷰 엔진 렌더링
//   res.render("test.ejs", { data: "daeyub" });
// });

// app.get("/public", function (req, res) {
//   res.render("practice02.html");
// });

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

// console.log(express);

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static((__dirname, "./public")));

app.get("/gugudan", (req, res) => {
  res.render("gugudan", { data: [2, 3, 4, 5, 6, 7, 8, 9] });
});

app.get("/apple", (req, res) => {
  res.render("apple");
});

app.get("/bug", (req, res) => {
  res.render("practice02");
});

app.get("/", (req, res) => {
  res.render("test");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
