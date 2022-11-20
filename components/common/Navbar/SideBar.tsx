import { Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import { userAtom } from "../../../jotai/user";
import { SidebarContentStudent } from "./SideBarContentStudent";
import { SidebarContentTeacher } from "./SideBarContentTeacher";

export const SideBar = () => {
  const [user] = useAtom(userAtom);

  return (
    <Box bg="white" h="full" w="200px" position="fixed" boxShadow="base">
      {user?.role === "Student" && <SidebarContentStudent />}
      {user?.role === "Teacher" && <SidebarContentTeacher />}
    </Box>
  );
};
