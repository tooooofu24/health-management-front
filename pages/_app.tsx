import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { SideBar } from "../components/common/SideBar";
import { CustomTheme } from "../chakra/CustomTheme";
import { NavBar } from "../components/common/NavBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../utils/firebase";
import { refreshBearerToken } from "../utils/bearer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const auth = getAuth(app);
  refreshBearerToken();
  onAuthStateChanged(auth, (user) => {
    if (!user && router.pathname != "/login" && router.route != "/404") {
      router.push("/login");
    }
  });

  return (
    <>
      <ChakraProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
