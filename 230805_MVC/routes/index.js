const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); //get
router.get("/comments", controller.comments); // get / comments
router.get("/comment/:id", controller.comment); //get /comment/:id

module.exports = router;
