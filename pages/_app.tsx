import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { SideBar } from "../components/common/SideBar";
import { CustomTheme } from "../chakra/CustomTheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <ChakraProvider theme={CustomTheme}>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
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
