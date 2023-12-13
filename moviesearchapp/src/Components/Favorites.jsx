import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Image,
  Button,
  Grid,
  GridItem,
  Text,
  Container,
  useToast,
} from "@chakra-ui/react";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favoriteMovies.filter(
      (movie) => movie.imdbID !== movieId
    );
    setFavoriteMovies(updatedFavorites);
    showToast();
  };

  const showToast = () => {
    toast({
      title: "Movie Removed",
      description: "The movie has been removed from your favorites.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Container maxW="100%">
        <Heading mt="30px" mb="4" textAlign="center">
          Favorite Movies
        </Heading>
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          w="100%"
          mt="80px"
          gap={4}
        >
          {favoriteMovies.map((movie) => (
            <GridItem key={movie.imdbID} w="100%" gap={10}>
              <Box
                border="1px solid black"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mx="auto"
                boxShadow="md"
              >
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  mx="auto"
                  height="250px"
                  mt="20px"
                  w="250px"
                />
                <Box p="4" textAlign="center">
                  <Heading fontSize="lg" mb="2">
                    <strong>Title:</strong> {movie.Title}
                  </Heading>
                  <Text fontSize="sm" mb="2">
                    <strong>Type:</strong> {movie.Type}
                  </Text>
                  <Text fontSize="sm">
                    <strong>Year:</strong> {movie.Year}
                  </Text>
                  <Button
                    onClick={() => removeFavorite(movie.imdbID)}
                    colorScheme="red"
                    mt="3"
                    size="sm"
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Favorites;
