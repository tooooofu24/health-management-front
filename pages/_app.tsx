import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, useToast } from "@chakra-ui/react";
import { CustomTheme } from "../chakra/CustomTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
