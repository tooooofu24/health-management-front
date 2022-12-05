import { Flex, Square, Text } from "@chakra-ui/react";
import { Illustration } from "../Illustration";
import { motion } from "framer-motion";

export const LoadingPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <motion.div
        animate={{ opacity: 0.3 }}
        initial={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
      >
        <Square size="20rem" maxW="70vw">
          <Illustration />
        </Square>
      </motion.div>
      <Text color="telegram.500">読み込み中...</Text>
    </Flex>
  );
};
