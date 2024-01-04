import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);

    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , comma seperated like the example result given ahead. Example Result:Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // Make an api call to gpt api and get Movie results
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    //TODO: write error handling
    // if(!chatCompletion.choices){

    // }

    // console.log(chatCompletion.choices);

    const gptMovieResult = "Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptMoviesArray = gptMovieResult.split(", ");

    //for each movie I will search TMDB API
    const promiseArray = gptMoviesArray.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    // console.log(promiseArray)

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({
        movieNames: gptMoviesArray,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="text-ellipsis md: p-4 m-4 col-span-9"
        />
        <button
          onClick={() => handleGptSearchClick()}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
