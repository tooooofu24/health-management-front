import { useUnreadHealthChecks } from "../../../hooks/HealthCheck";
import { Tile } from "../../common/Tile";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { CommonError } from "../../common/error/CommonError";

export const AdminHomePage = () => {
  const { healthChecks } = useUnreadHealthChecks();
  return (
    <Tile>
      {healthChecks.length ? (
        <Alert status="info">
          <AlertIcon />
          <SimpleGrid
            spacing={3}
            w="full"
            alignItems="center"
            columns={[1, 2, 2]}
          >
            <Box>
              <AlertTitle>未読の回答があります！</AlertTitle>
              <AlertDescription>
                まだチェックをつけていない生徒の回答が{healthChecks.length}
                件あります！
              </AlertDescription>
            </Box>
            <Flex justifyContent="end">
              <Button w="auto">確認する</Button>
            </Flex>
          </SimpleGrid>
        </Alert>
      ) : (
        <CommonError message="お知らせはありません" />
      )}
    </Tile>
  );
};
