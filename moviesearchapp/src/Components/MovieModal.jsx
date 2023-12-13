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
  } = movie;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto'>{Title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign='center'>
          <Image src={Poster} alt={Title} height="250px" mx='auto' w="300px"/>
          <Text>{Plot}</Text>
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
