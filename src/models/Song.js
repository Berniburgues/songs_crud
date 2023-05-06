const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Song = sequelize.define("songs", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Song;
