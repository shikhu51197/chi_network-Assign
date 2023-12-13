// MovieModal.jsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  Image,
  Text,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";


const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!movie) {
    return null;
  }

  const {
    Title,
    Poster,
    Plot,
    Director,
    Genre,
    Runtime,
    imdbRating,
    Year,
    Type,
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Metascore,
    Production,
    Rated,
    Released,
    Response,
    Website,
    Writer,
    imdbID,
    imdbVotes,
  } = movie;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx="auto" color="teal">
          {" "}
          <strong>Title:  </strong>  
          {Title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={Poster} alt={Title} height="200px" mx="auto" w="200px" />
          <Flex borderRadius={20} w="100%" mt="20px" lineHeight="40px">
            <Box w="50%">
              <Text fontSize="md">
                {" "}
                <strong>Plot:</strong>
                {Plot}
              </Text>
              <Text>
                <strong>Director:</strong> {Director}
              </Text>
              <Text>
                <strong>Genre:</strong> {Genre}
              </Text>
              <Text>
                <strong>Runtime:</strong> {Runtime}
              </Text>
              <Text>
                <strong>IMDb Rating:</strong> {imdbRating}
              </Text>
              <Text>
                <strong>Year:</strong> {Year}
              </Text>
              <Text>
                <strong>Type:</strong> {Type}
              </Text>
              <Text>
                <strong>Actors:</strong> {Actors}
              </Text>
              <Text>
                <strong>Awards:</strong> {Awards}
              </Text>

              <Text>
                <strong>Box Office:</strong> {BoxOffice}
              </Text>
            </Box>
            <Box w="50%" ml={10}>
              <Text>
                <strong>Country:</strong> {Country}
              </Text>
              <Text>
                <strong>DVD:</strong> {DVD}
              </Text>
              <Text>
                <strong>Metascore:</strong> {Metascore}
              </Text>
              <Text>
                <strong>Production:</strong> {Production}
              </Text>
              <Text>
                <strong>Rated:</strong> {Rated}
              </Text>
              <Text>
                <strong>Released:</strong> {Released}
              </Text>
              <Text>
                <strong>Response:</strong> {Response}
              </Text>
              <Text>
                <strong>Website:</strong> {Website}
              </Text>
              <Text>
                <strong>Writer:</strong> {Writer}
              </Text>
              <Text>
                <strong>IMDb Votes:</strong> {imdbVotes}
              </Text>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
