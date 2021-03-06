import { Box, Avatar, VStack, IconButton } from "@chakra-ui/react";
import React from "react";
import image from "../../assets/images/avatar.jpeg";
import { FiHome } from "react-icons/fi";
import { BiAddToQueue } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ChatIcons = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate("/home")}
      borderWidth="2px"
      borderColor="#9607BE"
      borderRadius="10px"
      _hover={{ cursor: "pointer" }}
    >
      <Avatar src={image} size="md" borderRadius="10px" alt="chatIcon" />
    </Box>
  );
};

const ChatsPanel = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg="#70058F"
      minWidth="6vw"
      width={["6vw", "7vw", "7vw", "6vw"]}
      height="100vh"
      borderRightWidth="0.1px"
      borderRightColor="#9607BE"
      flexShrink={0}
    >
      <VStack pt="2vh" spacing="2vh">
        <Box
          borderWidth="2px"
          borderColor="#9607BE"
          bg="#AC08D9"
          borderRadius="10px"
        >
          <IconButton
            bg="none"
            onClick={() => navigate("/dms/dms-browser")}
            icon={<FiHome color="white" />}
            size="md"
            alt="chatIcon"
          />
        </Box>
        <ChatIcons />
        <ChatIcons />
        <ChatIcons />
        <Box
          borderWidth="2px"
          borderColor="#9607BE"
          bg="#AC08D9"
          borderRadius="10px"
        >
          <IconButton
            bg="none"
            icon={<BiAddToQueue color="white" />}
            size="md"
            alt="chatIcon"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default ChatsPanel;
