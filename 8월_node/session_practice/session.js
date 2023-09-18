const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//세션
//옵션객체
//httpOnly: 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
//secure: 값을 true로 하면 https에서만 세션을 주고받음
//secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값(세션을 발급할 때 사용되는 키)
//resave: 세션에 수정사항이 생기지 않더라고 매 요청(req)마다 세션을 다시 저장할 것 인지
//saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
app.use(
  session({
    secret: "mySessionKey",
    resave: false, //덮어쓰기 가능 여부 결정
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("view");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  req.session.name = req.body.userid;
  req.session.password = req.body.password;
  res.send("세션 설정 완료");
});

app.get("/logout", (req, res) => {
  res.render("logout", { data: req.session.name });
});

app.get("/name", (req, res) => {
  res.send(req.session.password);
});

app.get("/destroy", (req, res) => {
  req.session.destroy();
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
