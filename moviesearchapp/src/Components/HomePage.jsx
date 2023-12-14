import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

import { Box, FormControl, Button, FormLabel, Select, Flex } from "@chakra-ui/react";
import axios from "axios";
const HomePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("Star Wars");
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = "536aa293";

  const handleSearch = async (query) => {
    try {
      setSearchQuery(query);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}&page=${currentPage}`;
    
        if (selectedYear) {
          url += `&y=${selectedYear}`;
        }
    
        if (selectedType) {
          url += `&type=${selectedType}`;
        }
    
        const response = await axios.get(url);
    
        if (response.data.Search) {
          const sortedResults = response.data.Search.sort((a, b) => {
            const comparison = a.Year.localeCompare(b.Year);
            return sortOrder === "asc" ? comparison : -comparison;
          });
    
          setSearchResults(sortedResults);
          setTotalPages(Math.ceil(response.data.totalResults / 5));
        } else {
          setSearchResults([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, selectedYear, selectedType, sortOrder, currentPage, apiKey]);

  const years = [];
  for (let year = 1900; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }

  const handleAddFavorite = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <Flex w="80%" m="auto">
        <FormControl mt={4}  ml={4}>
          <FormLabel>Select Year:</FormLabel>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl mt={4} ml={4}>
          <FormLabel>Select Type:</FormLabel>
          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </Select>
        </FormControl>

        <FormControl mt={4} ml={4}>
          <FormLabel>Sort Order:</FormLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </FormControl>
      </Flex>

      <MovieList movies={searchResults} onAddFavorite={handleAddFavorite} />
      <Box
  display="flex"
  alignItems="center"
  justifyContent="center"
  w="100%"
  m="auto"
  h="100px"

>
  <Button mr="20px" colorScheme="teal" onClick={handlePrevPage} disabled={currentPage === 1}>
    Prev
  </Button>
  <span>{`Page ${currentPage} of ${totalPages}`}</span>
  <Button ml="20px" colorScheme="teal" onClick={handleNextPage} disabled={currentPage === totalPages}>
    Next
  </Button>
</Box>

    </div>
  );
};

export default HomePage;
