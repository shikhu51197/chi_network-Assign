import React, { useState } from "react";
import {
  Input,
  Button,
  VStack,
  useToast,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const Navigate = useNavigate()
  const handleLogin = () => {
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      toast({
        title: "Login Successful!",
        description: `Welcome back, ${username}!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onLogin();
      Navigate('/')
      window.location.reload();
    } else {
      toast({
        title: "Error",
        description: "Invalid username or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack
      spacing={4}
      align="center"
      w="50%"
      margin="auto"
      marginTop="50px"
      h="400px"
      bgColor="telegram.50"
      border="2px solid teal"
      borderRadius="20px"
    >
      <Heading mt="20px" textAlign="center">
        Login
      </Heading>
      <Box
        w="70%"
        m="auto"
        h="300px"
        lineHeight="50px"
        borderRadius="20px"
        p="20px"
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb="3"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb="3"
        />
        <Button colorScheme="teal" w="100%" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </VStack>
  );
};

export default Login;
