import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { SideBar } from "../components/common/SideBar";
import { CustomTheme } from "../chakra/CustomTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={CustomTheme}>
        {/* <NavBar /> */}
        <SideBar />
        <Box pl="200px" pb="50px">
          <Box p="30px">
            <Component {...pageProps} />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
