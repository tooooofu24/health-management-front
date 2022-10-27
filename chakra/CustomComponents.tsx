export const CustomComponents = {
  components: {
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
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: 0,
            overflow: "hidden",
          },
          td: {
            textAlign: "center",
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
      },
    },
  },
};
