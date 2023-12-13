
import axios from "axios";

const API_KEY = "536aa293";
const OMDB_API_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${OMDB_API_URL}?apikey=${API_KEY}&s=${query}`
    );
    if (response.data.Response === "True") {
      console.log(response);
      return response.data.Search;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw error.message || "An error occurred while fetching movies.";
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${OMDB_API_URL}?apikey=${API_KEY}&i=${id}`
    );
    if (response.data.Response === "True") {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw error.message || "An error occurred while fetching movie details.";
  }
};
