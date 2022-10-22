import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, useToast } from "@chakra-ui/react";
import { CustomTheme } from "../chakra/CustomTheme";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../utils/firebase";
import { refreshBearerToken } from "../utils/bearer";
import { logout } from "../utils/auth";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
