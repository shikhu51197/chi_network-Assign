import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a user in local storage
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Check if there is a user in local storage whenever isLoggedIn changes
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!userFromLocalStorage);
  }, [isLoggedIn]);

  const handleLogout = () => {
    // Clear user from local storage and update isLoggedIn state
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bgColor="teal.500"
      color="white"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mr="100px">
          Movie App
        </Text>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        gap="50"
      >
        <Link to="/" style={{ marginRight: "20px", cursor: "pointer", color: "white" }}>
          Home
        </Link>
        <Link to="/favorites" style={{ marginRight: "20px", cursor: "pointer", color: "white" }}>
          Favorites
        </Link>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="flex-end"
      >
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Link to="/login">
              <Button mr={4}>Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="teal">Signup</Button>
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
