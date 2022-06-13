const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});
const Movies = mongoose.model("Movies", moviesSchema);

async function getMovies() {
  const movies = await Movies.find();

  return Movies;
}
async function addMovies(name, genre) {
  var m = new Movies({
    name: name,
    genre: genre,
  });
  await m.save();

  return m;
}
module.exports.getMovies = getMovies;
module.exports.addMovies = addMovies;

// module.exports = Movies;
