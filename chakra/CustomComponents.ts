import { StyleFunctionProps, theme } from "@chakra-ui/react";
import { isSmartPhoneScreen } from "../styles/Responsive";

export const CustomComponents = {
  components: {
    // Button
    Button: {
      variants: {
        responsive: (props: StyleFunctionProps) => {
          let res = {
            ...theme.components.Button.variants?.solid(props),
          };
          if (isSmartPhoneScreen()) {
            res = { ...theme.components.Button.sizes?.sm, ...res };
          }
          return res;
        },
        responsiveOutline: (props: StyleFunctionProps) => {
          let res = {
            ...theme.components.Button.variants?.outline(props),
          };
          if (isSmartPhoneScreen()) {
            res = { ...theme.components.Button.sizes?.sm, ...res };
          }
          return res;
        },
      },
    },
    // FormLabel
    FormLabel: {
      baseStyle: {
        color: "gray.500",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        "> svg": {
          width: "20px",
          height: "20px",
        },
      },
    },
    // Table
    Table: {
      variants: {
        simple: {
          th: {
            color: "teal.500",
            textAlign: "center",
          },
          td: {
            textAlign: "center",
            height: 14,
          },
        },
        unstyled: {
          th: {
            color: "gray.500",
            textAlign: "center",
          },
          td: {
            textAlign: "center",
          },
        },
      },
    },
    Modal: {
      parts: ["content"],
      sizes: {
        md: {
          dialog: {
            width: "md",
            maxWidth: "95vw",
          },
        },
        lg: {
          dialog: {
            width: "lg",
            maxWidth: "95vw",
          },
        },
        xl: {
          dialog: {
            width: "lg",
            maxWidth: "95vw",
          },
        },
        "4xl": {
          dialog: {
            width: "4xl",
            maxWidth: "95vw",
          },
        },
      },
    },
  },
};
