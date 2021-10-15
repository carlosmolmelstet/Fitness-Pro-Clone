import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const colors = {
  gray: {
    50: "#FEFEFF",
    100: "#FCFCFD",
    200: "#F4F5F6",
    300: "#E6E8EC",
    400: "#C3C8D1",
    500: "#777E90",
    600: "#505769",
    700: "#353945",
    800: "#23262F",
    900: "#141416",
  },
}

const  styles = {
  global: (props) => ({
    body: {
      fontFamily: "Poppins",
      color: mode("gray.700", "gray.300")(props),
      bg: mode("gray.100", "gray.900")(props),
      lineHeight: "base",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: mode("gray.800", "gray.100")(props),
    },
  }),
}


const theme = extendTheme({ config, colors, styles })

export default theme;