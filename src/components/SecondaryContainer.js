import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movies.popularMovies)
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
