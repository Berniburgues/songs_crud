const songRouter = require("./song.router");
const express = require("express");
const router = express.Router();

// colocar las rutas aquí
router.use("/songs", songRouter);

module.exports = router;
