import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { CustomComponents } from "./CustomComponents";
import { CustomStyle } from "./CustomStyle";

export const CustomTheme = extendTheme(
  CustomComponents,
  CustomStyle,
  withDefaultColorScheme({
    colorScheme: "teal",
  })
);
