import { Box, Button, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import Router from "next/router";
import { Pencil } from "phosphor-react";
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
