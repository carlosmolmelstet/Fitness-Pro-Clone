import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "Poppins",
      color: mode("gray.800", "gray.300")(props),
      bg: mode("gray.100", "gray.900")(props),
      lineHeight: "base",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: mode("gray.800", "gray.100")(props),
    },
  }),
}


export default styles;