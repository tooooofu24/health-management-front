import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { BreakPoints } from "./BreakPoints";
import { CustomComponents } from "./CustomComponents";
import { CustomStyle } from "./CustomStyle";

export const CustomTheme = extendTheme(
  CustomComponents,
  CustomStyle,
  BreakPoints,
  withDefaultColorScheme({
    colorScheme: "telegram",
  })
);
