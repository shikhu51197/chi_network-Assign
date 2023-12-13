import React, { useState } from "react";
import { Input, Button, VStack, useToast, Heading, Box } from "@chakra-ui/react";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignup = () => {
    if (!email || !username || !password) {
      alert("Please fill all the fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, username, password }));

    toast({
      title: "Signup Successful!",
      description: "You have successfully signed up.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onSignup();
  };

  return (
    <VStack spacing={4} align="center" w="50%"  bgColor="telegram.50" h="400px" border="2px solid teal" borderRadius="20px" margin="auto" marginTop="50px">
      <Heading mt="20px" textAlign="center">
        Signup
      </Heading>
      <Box w="70%" m="auto" h="300px" lineHeight="50px"  borderRadius="20px" p="20px">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb="3"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb="3"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb="3"
        />
        <Button colorScheme="teal" w="100%" onClick={handleSignup}>
          Signup
        </Button>
      </Box>
    </VStack>
  );
};

export default Signup;
