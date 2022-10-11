import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { SideBar } from "../components/common/SideBar";
import { CustomTheme } from "../chakra/CustomTheme";
import { NavBar } from "../components/common/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={CustomTheme}>
        <Box className="side-bar-layout">
          <SideBar />
          <Box pl="200px">
            <Box p="30px">
              <Component {...pageProps} />
            </Box>
          </Box>
        </Box>
        <Box className="no-side-bar-layout">
          <NavBar />
          <Box pt="50px">
            <Box p="1.15rem">
              <Component {...pageProps} />
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
