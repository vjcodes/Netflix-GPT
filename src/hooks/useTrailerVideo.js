import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    const getMovieVideos = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const data = await fetch(url, API_OPTIONS);
      const jsonData = await data.json();
      const trailers = jsonData.results.filter(
        (item) => item.type === "Trailer"
      );

      const trailer = trailers?.length ? trailers[0] : jsonData?.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    !trailerVideo && getMovieVideos();
  }, []);
};
