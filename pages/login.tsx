import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Login } from "../components/login/Index";

const LoginPage: NextPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      justifyContent="center"
      alignItems="center"
    >
      <Login />
    </Flex>
  );
};

export default LoginPage;
