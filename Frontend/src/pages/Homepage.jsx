import React from "react";
import { Container, Box, Text, Tabs } from "@chakra-ui/react";
import "../App.css";
import Login from "../Authentication/Login";

const Homepage = () => {
  return (
    <Container maxW="2xl" centerContent p={1}>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="xl"
        borderWidth="1px"
      >
        <Text
          fontSize="3xl"
          fontFamily='"Poppins", sans-serif'
          color="black"
          textAlign="center"
        >
          Syncify
        </Text>
      </Box>
      <Box bg="white" w="100%" p={10} borderRadius="xl" borderWidth="1px">
        <Tabs.Root variant="enclosed" maxW="xl" fitted defaultValue={"tab-1"}>
          <Tabs.List>
            <Tabs.Trigger value="tab-1">Login</Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Sign Up</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <Login />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Homepage;
