
import React, { useState, useEffect } from "react";
import { Box, Select, Button, Flex, Input } from "@chakra-ui/react";

const SearchResults = ({ movies, onSort, onFilter }) => {
  const [sortCriteria, setSortCriteria] = useState("Title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const sortResults = () => {
    if (!Array.isArray(movies)) {
      console.error("Movies is not an array");
      return;
    }

    const sortedResults = [...movies].sort((a, b) => {
      if (sortCriteria === "Year") {
        return sortOrder === "asc"
          ? parseInt(a[sortCriteria], 10) - parseInt(b[sortCriteria], 10)
          : parseInt(b[sortCriteria], 10) - parseInt(a[sortCriteria], 10);
      } else {
        return sortOrder === "asc"
          ? a[sortCriteria].localeCompare(b[sortCriteria])
          : b[sortCriteria].localeCompare(a[sortCriteria]);
      }
    });

    onSort(sortCriteria, sortOrder, sortedResults);
    onFilter(selectedGenre, selectedYear, sortedResults);
  };

  const filterResults = () => {
    if (!Array.isArray(movies)) {
      console.error("Movies is not an array");
      return;
    }

    let filteredResults = [...movies];

    if (selectedGenre) {
      filteredResults = filteredResults.filter((movie) =>
        movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (selectedYear) {
      filteredResults = filteredResults.filter((movie) =>
        movie.Year.includes(selectedYear)
      );
    }

    onFilter(selectedGenre, selectedYear, filteredResults);
  };

  return (
    <Flex justifyContent="space-between" m="auto" w="80%">
      <Box className="SortFilter" mb={4} w="48%">
        <Select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="Title">Title</option>
          <option value="Year">Year</option>
        </Select>

        <Button onClick={sortResults} colorScheme="orange" mt="20px" ml={2}>
          Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
        </Button>
      </Box>

      <Box className="Filter" w="48%">
        <Select onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
        </Select>

        <Input
          type="number"
          placeholder="Select Year"
          onChange={(e) => setSelectedYear(e.target.value)}
          ml={2}
        />

        <Button colorScheme="pink" onClick={filterResults} ml={2} mt="20px">
          Apply Filters
        </Button>
      </Box>
    </Flex>
  );
};

export default SearchResults;
