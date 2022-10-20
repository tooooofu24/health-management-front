import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { isPCScreen } from "../../styles/Responsive";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  if (isPCScreen()) {
    return (
      <>
        <SideBar />
        <Box pl="200px">
          <Box p="30px">{children}</Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <Box pt="50px">
          <Box p="1.15rem">{children}</Box>
        </Box>
      </>
    );
  }
};
