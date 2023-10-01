import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Movies from "../movies/Movies";
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
  }, []);

  return (
    <>
      <div className="carousel">
        <Carousel
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showThumbs={false}
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Movies />
    </>
  );
};

export default Home;
