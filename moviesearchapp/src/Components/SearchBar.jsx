import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box m="auto" mb={4} display="flex" alignItems="center" mt="50px">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies by title (e.g. Thar)"
        borderRadius="md"
        focusBorderColor="teal.500"
        mr={2}
        ml={300}
        w="60%"
      />
      <Button
        colorScheme="teal"
        onClick={handleSearch}
        borderRadius="md"
        _hover={{ bg: "teal.500" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
