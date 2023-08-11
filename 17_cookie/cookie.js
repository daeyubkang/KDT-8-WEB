const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));
app.use("/views", express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.set("views", "./views");

//cookie-parser
//일반쿠키
// app.use(cookieParser());
//암호화쿠키
app.use(cookieParser("abcdef"));

//cookie 옵션 객체
const cookieConfig = {
  //httpOnly: 웹 서버를 통해서만 쿠키에 접근가능
  //maxAge: 쿠키의 수명
  //expires: 만료 날짜 GMT시간설정
  //path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고
  //웹 브라우저는 해당하는 쿠키만 서버에 전송
  //쿠키가 전송될 url 특정 가능(기본값: '/')
  //domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  //secure: 웹 브라우저와 웹 서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  //signed: 쿠키의 암호화 설정(req.signedCookies 객체에 들어있음)
  httpOnly: true,
  maxAge: 60 * 1000 * 60 * 24, //1분
  signed: true,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/setCookie", (req, res) => {
  //쿠키 이름, 쿠키 값, 옵션 객체
  console.log(req.query);
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie");
});

app.post("/setCookie", (req, res) => {
  //쿠키 이름, 쿠키 값, 옵션 객체
  console.log(req.body.checking);
  if (req.body.checking) {
    res.cookie("myCookie", "myValue", cookieConfig);
  }
  res.send("set cookie");
});

app.get("/getCookie", (req, res) => {
  res.send(req.signedCookies.myCookie);
  console.log(req.signedCookies.myCookie);
  if (req.signedCookies.myCookie == "myValue") {
    console.log("correct");
  } else {
    console.log("Ncorrext");
  }
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
