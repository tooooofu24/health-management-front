import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { NavBar } from "../components/common/NavBar";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { SideBar } from "../components/common/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme(
    withDefaultColorScheme({ colorScheme: "teal" }),
    {
      fonts: {
        heading: `'M PLUS Rounded 1c', sans-serif`,
        body: `'M PLUS Rounded 1c', sans-serif`,
      },
      color: "gray.700",
      bodyBg: "gray.50",
    }
  );
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar />
      <SideBar />
      <Box pl="200px" py="50px">
        <Box p="30px">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
