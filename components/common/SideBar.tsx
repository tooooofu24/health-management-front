import { Box } from "@chakra-ui/react";
import React from "react";
import { SidebarContent } from "./SideBarContent";

export const SideBar = () => {
  return (
    <Box
      bg="white"
      h="full"
      w="200px"
      py="30px"
      position="fixed"
      boxShadow="base"
    >
      <SidebarContent />
    </Box>
  );
};
