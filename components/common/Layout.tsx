import { Box } from "@chakra-ui/react";
import { Role } from "@prisma/client";
import { FC, ReactNode } from "react";
import { isSmartPhoneScreen } from "../../styles/Responsive";
import { NavBar } from "./Navbar/NavBar";
import { SideBar } from "./Navbar/SideBar";

type props = {
  role: Role;
  children: ReactNode;
};
export const Layout: FC<props> = ({ role, children }) => {
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
        <SideBar role={role} />
        <Box pl="200px">
          <Box p="30px">{children}</Box>
        </Box>
      </Box>
    );
  }
};
