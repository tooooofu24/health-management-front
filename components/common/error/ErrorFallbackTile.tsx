import { Box, Button, Flex } from "@chakra-ui/react";
import { ArrowClockwise } from "phosphor-react";
import { FC } from "react";
import { Tile } from "../Tile";
import { CommonError } from "./CommonError";

type props = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorFallbackTile: FC<props> = ({ error, resetErrorBoundary }) => {
  return (
    <Tile>
      <Box role="alert" textAlign="center" pb={5}>
        <CommonError message="エラーが発生しました。" error={error.message} />
        <Button leftIcon={<ArrowClockwise />} onClick={resetErrorBoundary}>
          再読み込み
        </Button>
      </Box>
    </Tile>
  );
};
