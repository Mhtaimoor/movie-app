const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const cors = require("cors");
app.use(cors());

dotenv.config();

// mongoose.connect(process.env.DB_CONNECTION , {
//         useNewUrlParser: true
//     })
//     .then(() => console.log("Connected to Mongo ...."))
//     .catch((error) => console.log(error.message));

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

app.use(express.json());
const movieRoute = require("./routes/movies");

app.use("/movies", movieRoute);
const port = 4000;
app.listen(port, function () {
  console.log(`Listening on Port 4000....`);
});

app.get("/", function (request, response) {
  response.send("Movies Server Started");
});
