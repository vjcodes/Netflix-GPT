import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1",
        API_OPTIONS
      );
      const jsonData = await data.json();
      dispatch(addPopularMovies(jsonData?.results));
    };

    !popularMovies && fetchData();
  }, []);
};
