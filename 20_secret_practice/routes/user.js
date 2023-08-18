const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.get_signup);
router.post("/", controller.post_signup);
router.get("/login", controller.get_login);
router.post("/login", controller.post_login);
router.get("/update", controller.get_update);
router.post("/update", controller.post_update);

module.exports = router;
