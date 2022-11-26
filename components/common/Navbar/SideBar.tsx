import { Box, Flex } from "@chakra-ui/react";
import { Role } from "@prisma/client";
import React, { FC } from "react";
import { SidebarContentStudent } from "./SideBarContentStudent";
import { SidebarContentTeacher } from "./SideBarContentTeacher";

type props = {
  role: Role;
};
export const SideBar: FC<props> = ({ role }) => {
  return (
    <Box bg="white" h="full" w="200px" position="fixed" boxShadow="base">
      {role === "Student" ? <SidebarContentStudent /> : null}
      {role === "Teacher" ? <SidebarContentTeacher /> : null}
    </Box>
  );
};
