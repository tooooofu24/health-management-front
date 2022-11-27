import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GoogleLogo } from "phosphor-react";
import { useState } from "react";
import { login } from "../../utils/auth";
import { A } from "../common/Link";
import { Logo } from "../common/Logo";
import { Tile } from "../common/Tile";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const onClick = () => {
    setIsLoading(true);
    login()
      .then(() => {
        router.push("/admin");
        toast({
          title: "",
          description: "ログインしました！",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((e: any) => {
        setErrorMessage(e.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box>
      <Tile maxW="85vw" width="350px">
        <Flex justifyContent="center">
          <Logo mb={3} />
        </Flex>
        <Button
          isLoading={isLoading}
          leftIcon={<GoogleLogo />}
          width="100%"
          onClick={() => onClick()}
        >
          ログイン
        </Button>
        {errorMessage && (
          <Alert status="error" mt={2}>
            <AlertIcon />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </Tile>
      <A href="/guest/contact" mt={3} textAlign="center" fontSize="sm">
        お問合せはこちら
      </A>
    </Box>
  );
};
