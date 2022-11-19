import { Box } from "@chakra-ui/react";
import React from "react";
import { SidebarContentStudent } from "./SideBarContentStudent";
import { SidebarContent } from "./SideBarContentTeacher";

export const SideBar = () => {
  return (
    <Box bg="white" h="full" w="200px" position="fixed" boxShadow="base">
      <SidebarContentStudent />
      {/* <SidebarContent /> */}
    </Box>
  );
};
