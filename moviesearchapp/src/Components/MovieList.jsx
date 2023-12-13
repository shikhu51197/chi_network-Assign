import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Button,
  Text,
  Grid,
  GridItem,
  Flex,
  Container,
  useToast,
} from "@chakra-ui/react";
import MovieModal from "./MovieModal";
import axios from "axios";

const MovieList = ({ movies, onAddFavorite }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ID, setID] = useState("");
  const toast = useToast();

  const handleViewDetails = (movie) => {
    
    setID(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFavorite = (movie) => {
    onAddFavorite(movie);
    showToast();
  };

  const showToast = () => {
    toast({
      title: "Added to Favorites",
      description: "This movie has been added to your favorites.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };


  useEffect(() => {
    getUser(ID);
  }, [ID]);

  const getUser = async (cc) => {
   
    const res = await axios.get(
      `https://www.omdbapi.com?apikey=536aa293&i=${cc}`
    );
  
    setSelectedMovie(res.data);
  };
  return (
    <Container maxW="100%" mt="100px" p="10">
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={10}
        w="100%"
      >
        {movies.map((movie) => (
          <GridItem key={movie.imdbID}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              mx="auto"
            >
              <Image
                src={movie.Poster}
                alt={movie.Title}
                height="250px"
                mx="auto"
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
                <Flex mt="3" gap={10}>
                  <Button
                    colorScheme="teal"
                    onClick={() => handleViewDetails(movie.imdbID)}
                    ml="6"
                    size="sm"
                  >
                    View Details
                  </Button>
                  <Button
                    onClick={() => handleAddFavorite(movie)}
                    colorScheme="teal"
                    size="sm"
                  >
                    Add to Favorites
                  </Button>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        ))}
        <MovieModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      </Grid>
    </Container>
  );
};

export default MovieList;
