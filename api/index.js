const express = require('express');
const mongoose = require('mongoose');
const movieModel = require("./models/movies");
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION , {
        useNewUrlParser: true
    })
    .then(() => console.log("Connected to Mongo ...."))
    .catch((error) => console.log(error.message));

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
app.listen(port, function () {
    console.log(`Listening on Port 4000....`);
});

app.get('/', function (request, response) {
    response.send("Movies Server Started");
});

app.get('/api/movies', async function (request, response) {

    const movies = await moviesModel.getMovies();
    console.log(movies);
    response.send(movies);

});

app.post('/api/movies', async function (request, response) {

    const m = await moviesModel.addMovies(request.body.name, request.body.genre);
    console.log(movies);
    response.send(m);

});