const express = require("express");
const controller = require("../controller/Cvisitor");
const { route } = require("../../230805_MVC/routes");
const router = express.Router();

router.get("/", controller.getVisitors);

router.get("/get", controller.getVisitor);

router.post("/write", controller.postVisitor);

router.patch("/edit", controller.patchVisitor);

router.delete("/delete", controller.deleteVisitor);

module.exports = router;
