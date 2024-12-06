import React, { useState } from "react";
import { Input, VStack } from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
const Login = () => {
  const [first, setfirst] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [picture, setPicture] = useState();

  return (
    <VStack spacing="5px" color="black" align="flex-start" w="100%">
      <FormControl id="first-name" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter you Name"
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-email" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter you Email"
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-password" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">Password</FormLabel>
        <Input
          type="email"
          placeholder="Enter you Password"
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-confirmPassword" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">Confirm Password</FormLabel>
        <Input
          type="email"
          placeholder="Confirm your Password"
          onChange={(e) => {
            setfirst(e.target.value);
          }}
          w="100%"
        />
      </FormControl>
    </VStack>
  );
};

export default Login;
