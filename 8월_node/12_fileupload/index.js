const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

//body-parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

//정적 파일 설정
app.use("/upload", express.static(__dirname + "/upload"));

//multer setting
const upload = multer({
  //dest: 업로드할 파일의 저장할 경로를 지정
  dest: "upload/",
});
const uploadDetail = multer({
  //storage 저장할 공간에 대한 정보
  //diskStorage 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "upload/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log(ext);
      done(null, req.body.id + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 1 },
});

app.get("/", (req, res) => {
  res.render("practice");
});

//싱글
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const image = req.file.path;
  res.render("result", { image });
});

//멀티 1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

//멀티 2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

//동적 파일 업로드
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
