import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "../components/common/NavBar";
import { Container } from "@chakra-ui/react";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme(
    withDefaultColorScheme({ colorScheme: "teal" })
  );
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar />
      <Container maxW="container.xl" color="gray.700" py={30}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
