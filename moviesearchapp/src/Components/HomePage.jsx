import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { searchMovies, getMovieDetails } from "./services/api";
import MovieList from "./MovieList";
import { SimpleGrid } from "@chakra-ui/react";

const HomePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    try {
      const movies = await searchMovies(query);
      setSearchResults(movies);
      setSelectedMovie(null);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const handleSelectMovie = async (id) => {
    try {
      const movie = await getMovieDetails(id);
      setSelectedMovie(movie);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleAddFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults />

      <MovieList
        movies={searchResults}
        onSelectMovie={handleSelectMovie}
        onAddFavorite={handleAddFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default HomePage;
