import React from "react";
import { Component } from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Movies = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:4000/movies/all");
      console.log(res.data);
      setData(res.data);
    };
    getPost();
  });
  const handlemovie = async (e) => {
    e.preventDefault();

    const Post = {
      name: name,
      genre: genre,
    };
    await axios
      .post("http://localhost:4000/movies/create", Post)
      //   .post("/create", Post)
      // .then((res) => res.json())
      .then((data) => {
        // console.log(user.username);
        console.log(data);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row">
        <label htmlFor="">Enter Movie Name</label>
        <input
          type="text"
          name="addMovie"
          id="addMovie"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Add Movie Name Here"
        />
        <label htmlFor="">Enter Movie Genre</label>
        <input
          type="text"
          name="addGenre"
          id="addGenre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
          placeholder="Add Movie Genre Here"
        />
        <button className="btn btn-info" onClick={handlemovie}>
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
            {data.map?.((movies, index) => (
              <tr key={index}>
                <td>{movies.name}</td>
                <td>{movies.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
