export const CustomComponents = {
  components: {
    // FormLabel
    FormLabel: {
      baseStyle: {
        color: "gray.500",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        svg: {
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
          },
        },
      },
    },
  },
};
