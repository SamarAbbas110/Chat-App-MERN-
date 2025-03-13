import React, { useState } from "react";
import { Button, Input, VStack, Center, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const HandleClick = () => {
    setshow(!show);
  };

  return (
    <VStack spacing="5px" color="black" align="flex-start" w="100%">
      <FormControl id="first-email" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Email
        </FormLabel>
        <Input
          type="email"
          placeholder="Enter you Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-password" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Password
        </FormLabel>

        {/* Input Group of Password */}
        <Box position="relative" w="100%">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            pr="4rem" // Add padding to make space for the button
          />
          <Button
            onClick={HandleClick}
            variant={"solid"}
            position="absolute"
            top="50%"
            right="0.5rem"
            transform="translateY(-50%)"
            h="1.75rem"
            size="sm"
            bg="transparent"
            _focus={{ boxShadow: "none", border: "none", outline: "none" }}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Box>
      </FormControl>
      <Button w="100%" bgColor="blue" color="white" width="100%">
        Login
      </Button>
      <Button
        w="100%"
        bgColor="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
