import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="bold" fontSize={20} textColor="teal.500">
      {children}
    </Text>
  );
};
