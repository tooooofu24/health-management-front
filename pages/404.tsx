import { Box, Button, Flex, Img, Square, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { House } from "phosphor-react";
import { CommonError } from "../components/common/error/CommonError";
import { Layout } from "../components/common/Layout";

const NotFound: NextPage = () => {
  return (
    <Box position="fixed" w="full" h="full">
      <Flex
        alignItems="center"
        flexDirection="column"
        h="full"
        justifyContent="center"
      >
        <Box>
          <CommonError message="お探しのページが見つかりませんでした" />
          <Link href="/">
            <a>
              <Button w="full" leftIcon={<House size={20} />}>
                トップページに戻る
              </Button>
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
