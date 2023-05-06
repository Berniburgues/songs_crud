const {
  getAll,
  getById,
  createSong,
  updateSong,
  deleteSong,
} = require("../controllers/song.controllers");
const express = require("express");

const songRouter = express.Router();

songRouter.route("/").get(getAll).post(createSong);
songRouter.route("/:id").get(getById).put(updateSong).delete(deleteSong);

module.exports = songRouter;
