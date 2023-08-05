const express = require("express");
const controller = require("../controller/Cvisitor");
const { route } = require("../../230805_MVC/routes");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors);

router.get("/createVisitors", controller.createVisitors);

router.post("/createVisitors", (req, res) => {
  const username = req.body.username; // query 매개변수를 사용하여 username 데이터를 가져옴
  const comment = req.body.comment; // query 매개변수를 사용하여 comment 데이터를 가져옴

  // 이후 username과 comment 값을 사용하여 작업을 수행하거나 뷰를 렌더링
  res.send(`Username: ${username}, Comment: ${comment}`);
});

router.get("/visitor", controller.getVisitors);

router.get("/visitor", controller.getVisitors);

module.exports = router;
