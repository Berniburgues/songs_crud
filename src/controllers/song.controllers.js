const catchError = require("../utils/catchError");
const Song = require("../models/Song");

const getAll = catchError(async (req, res) => {
  const songs = await Song.findAll();
  return res.json(songs);
});

const getById = catchError(async (req, res) => {
  const { id } = req.params;
  const song = await Song.findByPk(id);
  return res.json(song);
});

const createSong = catchError(async (req, res) => {
  const { name, artist, genre, releaseYear } = req.body;
  const newSong = await Song.create({ name, artist, genre, releaseYear });
  return res.status(201).json(newSong);
});

const updateSong = catchError(async (req, res) => {
  const { id } = req.params;
  const { name, artist, genre, releaseYear } = req.body;
  const song = await Song.update(
    { name, artist, genre, releaseYear },
    { where: { id }, returning: true }
  );

  return res.json(song[1][0]);
});

const deleteSong = catchError(async (req, res) => {
  const { id } = req.params;
  await Song.destroy({ where: { id } });
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  getById,
  createSong,
  updateSong,
  deleteSong,
};
