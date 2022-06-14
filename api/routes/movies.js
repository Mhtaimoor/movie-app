const express = require("express");
const router = express.Router();

const Movie = require("../models/movies");

router.get("/", (req, res) => {
  res.send("We are on movies");
});

router.post("/create", async (req, res) => {
  const { name, genre } = req.body;
  try {
    const post = new Movie({
      name,
      genre,
    });
    await post.save();
    res.status(201).send("New Movie Added");
  } catch (error) {
    res.json({ message: error });
  }
});
router.get("/all", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const movie = req.params.id;
  try {
    await Movie.findOneAndDelete({ _id: movie });
    res.status(200).send("Movie Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
