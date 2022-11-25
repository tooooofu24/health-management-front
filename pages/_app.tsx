import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex, useToast } from "@chakra-ui/react";
import { CustomTheme } from "../chakra/CustomTheme";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../components/common/loading/LoadingTile";
import { FC, Suspense } from "react";
import { Loading } from "../components/common/loading/Loading";
import { CommonError } from "../components/common/error/CommonError";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
        {/* <Suspense fallback={<LoadingPage />}> */}
        <Component {...pageProps} />
        {/* </Suspense> */}
      </ErrorBoundary>
    </ChakraProvider>
  );
}

const LoadingPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      display="grid"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Loading /> */}
    </Flex>
  );
};

type props = {
  error: Error;
  resetErrorBoundary: () => void;
};
const ErrorFallbackPage: FC<props> = ({ error, resetErrorBoundary }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      display="grid"
      justifyContent="center"
      alignItems="center"
    >
      <CommonError message="エラーが発生しました。" error={error.message} />
    </Flex>
  );
};

MyApp.getInitialProps = async () => ({ pageProps: {} });

export default MyApp;
