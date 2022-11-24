import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
} from "@chakra-ui/react";
import { FC } from "react";

type props = {
  message: string;
} & AlertProps;
export const ErrorAlert: FC<props> = ({ message, ...props }) => {
  return message ? (
    <Alert status="error" {...props}>
      <AlertIcon />
      <AlertDescription>
        エラーが発生しました。 <br />
        以下のメッセージをコピーして、お問合せにお送りください。
        <br />
        {message}
      </AlertDescription>
    </Alert>
  ) : null;
};
