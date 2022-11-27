import { Box, Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ContactForm } from "../../components/common/ContactForm";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { A } from "../../components/common/Link";
import { LoadingTile } from "../../components/common/loading/LoadingTile";

const TopPage: NextPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
      <Suspense fallback={<LoadingTile />}>
        <Flex
          w="100%"
          h="100%"
          position="fixed"
          display="grid"
          alignItems="center"
          justifyContent="center"
        >
          <Box maxW="90vw" width="700px">
            <Box>
              <Text
                fontWeight="bold"
                color="teal.500"
                fontSize="xl"
                mb={5}
                textAlign="center"
              >
                お問合せ
              </Text>
              <ContactForm />
              <A href="/login" mt={3} textAlign="center" fontSize="sm">
                ログインはこちら
              </A>
            </Box>
          </Box>
        </Flex>
      </Suspense>
    </ErrorBoundary>
  );
};

export default TopPage;
