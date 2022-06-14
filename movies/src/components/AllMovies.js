import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:4000/movies/all" + search);
      console.log(res.data);
      setData(res.data);
    };
    getPost();
  }, [search]);

  return (
    <div>
      {data.map?.((post) => {
        return (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-12 lg:px-20 lg:w-1/2 lg:h-1/2 container  mx-auto px-4 md:px-12">
            <div className="Posts overflow-hidden rounded-lg shadow-lg">
              <span className="title no-underline  text-black text-lg ">
                {" "}
                <h6 className=" font-bold">Movie: {post.name}</h6>
                <h6>Genre: {post.genre}</h6>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
