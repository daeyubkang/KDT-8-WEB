const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const multer = require("multer");
const upload = multer({
  dest: "uploads",
});

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limit: { fileSize: 5 * 1024 * 1024 },
});

//ejs
app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.render("index");
});

app.post(
  "/upload",
  uploadDetail.single("dynamic-userfile"),
  function (req, res) {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  }
);

app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
