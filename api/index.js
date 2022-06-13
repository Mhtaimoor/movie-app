const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movies");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// mongoose.connect(process.env.DB_CONNECTION , {
//         useNewUrlParser: true
//     })
//     .then(() => console.log("Connected to Mongo ...."))
//     .catch((error) => console.log(error.message));

mongoose
  .connect(
    "mongodb+srv://taimoor:taimoor@moviesdb.p7hre.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
app.listen(port, function () {
  console.log(`Listening on Port 4000....`);
});

app.get("/", function (request, response) {
  response.send("Movies Server Started");
});

app.get("/api/movies", async function (request, response) {
  try {
    console.log("inside");
    const m = await Movie.find();
    console.log(m);
    response.send(m);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/api/movies", async function (request, response) {
  const m = await Movie.addMovies(request.body.name, request.body.genre);
  console.log(m);
  response.send(m);
});
