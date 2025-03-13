import React, { useState } from "react";
import { Button, Input, VStack, Center, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);
  const handleConfirmClick = () => setConfirmShow(!confirmShow);

  const submitHandler = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true); // Start loading
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      alert("Registration Successful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false); // Stop loading
      navigate("/chats");
    } catch (err) {
      alert("Error Occurred");
      console.error(err);
      setLoading(false); // Stop loading in case of error
    }
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (!pics) {
      alert("Please upload an image.");
      setLoading(false);
      return;
    }
    console.log("Selected file:", pics); // Debugging: Log the file
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chat App");
      data.append("cloud_name", "dlsf5atjh");
      fetch("https://api.cloudinary.com/v1_1/dlsf5atjh/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Upload response:", data); // Debugging: Log the response
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          alert("Image Upload Failed");
          console.error("Upload error:", err); // Debugging: Log the error
          setLoading(false);
        });
    } else {
      alert("Please select a valid image (JPEG or PNG).");
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px" color="black" align="flex-start" w="100%">
      <FormControl id="first-name" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Name
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-email" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Email
        </FormLabel>
        <Input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          w="100%"
        />
      </FormControl>
      <FormControl id="first-password" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Password
        </FormLabel>
        <Box position="relative" w="100%">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            w="100%"
          />
          <Button
            onClick={handleClick}
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
      <FormControl id="first-confirmPassword" isRequired w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Confirm Password
        </FormLabel>
        <Box position="relative" w="100%">
          <Input
            placeholder="Confirm your Password"
            type={confirmShow ? "text" : "password"}
            w="100%"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            onClick={handleConfirmClick}
            position="absolute"
            top="50%"
            right="0.5rem"
            transform="translateY(-50%)"
            h="1.75rem"
            size="sm"
            bg="transparent"
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
          >
            {confirmShow ? "Hide" : "Show"}
          </Button>
        </Box>
      </FormControl>
      <FormControl id="pic" w="100%">
        <FormLabel fontSize="smaller" mb="5px">
          Upload Your Image
        </FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Center pt="4px" w="full">
        <Button
          color="white"
          style={{ marginTop: 15 }}
          onClick={() => {
            submitHandler();
            toaster.success({
              title: "Update successful",
              description: "File saved successfully to the server",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
          }}
          isLoading={loading}
        >
          {loading ? "loading..." : " Submit"}
        </Button>
      </Center>
    </VStack>
  );
};

export default Signup;
