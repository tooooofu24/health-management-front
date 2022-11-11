import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { isSmartPhoneScreen } from "../../styles/Responsive";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  if (isSmartPhoneScreen()) {
    return (
      <Box sx={{ "@media screen and (min-width: 900px)": { display: "none" } }}>
        <NavBar />
        <Box pt="50px">
          <Box p="1.15rem">{children}</Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ "@media screen and (max-width: 900px)": { display: "none" } }}>
        <SideBar />
        <Box pl="200px">
          <Box p="30px">{children}</Box>
        </Box>
      </Box>
    );
  }
};
