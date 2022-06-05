import React, { Component } from "react";
import axios from "axios";

class Movies extends Component {
  state = {
    movies: [{ name: "Inception", genre: "Sci-fi" }, { name: "Deception", genre: "Sci-fi" }],
    newMovie: {
      name: "",
      genre: ""
    }
  };
  fectMovies = () => {
    var self = this;
    axios.get("http://localhost:4000/api/movies").then(function(movies) {
      console.log(movies.data);
      self.setState({ movies: movies.data });
    });
  };
  componentDidMount() {
    this.fectMovies();
  }
  addMovies = () => {
    axios
      .post("http://localhost:4000/api/movies", {
        name: this.state.newMovie.name,
        genre: this.state.newMovie.genre
      })
      .then(function(movies) {
        console.log(movies.data);
        //self.setState({ movies: movies.data });
      });
    this.fectMovies();
  };
  render() {
    return (
      <div className="row">
          <label htmlFor="">Enter Movie Name</label>
        <input
          type="text"
          name="addMovie"
          id="addMovie"
          placeholder="Add Movie Name Here"
          value={this.state.newMovie.name}
          onChange={e => {
            let m = { name: e.target.value };
            this.setState({ newMovie: m });
          }}
        />
        <label htmlFor="">Enter Movie Genre</label>
        <input
          type="text"
          name="addGenre"
          id="addGenre"
          placeholder="Add Movie Genre Here"
          value={this.state.newMovie.genre}
          onChange={e => {
            let g = { genre: e.target.value };
            this.setState({ newMovie: g });
          }}
        />
        <button className="btn btn-info" onClick={this.addMovies}>
          Add Movie
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movies, index) => (
              <tr key={index}>
                <td>{movies.name}</td>
                <td>{movies.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
