import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { GoogleLogo } from "phosphor-react";
import { useState } from "react";
import { login } from "../../utils/auth";
import { Icon } from "../common/Icon";
import { Tile } from "../common/Tile";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const toast = useToast();

  const onClick = () => {
    login()
      .then(() => {
        router.push("/");
        toast({
          title: "",
          description: "ログインしました！",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch(() => {
        setErrorMessage("ログインに失敗しました。");
      });
  };

  return (
    <Tile maxW="85vw" width="350px">
      <Flex
        alignItems="center"
        justifyContent="center"
        px="16px"
        gap="15px"
        py="50px"
      >
        <Icon width={30} height={30} />
        <Text fontWeight="bold" fontSize="20px" color="teal.500">
          出席くん
        </Text>
      </Flex>
      <Button leftIcon={<GoogleLogo />} width="100%" onClick={() => onClick()}>
        ログイン
      </Button>
      {errorMessage && (
        <Alert status="error" mt="16px">
          <AlertIcon />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </Tile>
  );
};
