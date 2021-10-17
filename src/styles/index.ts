import { extendTheme, ThemeConfig} from "@chakra-ui/react"
import foundations from "./foundations"
import components from "./components"
import styles from "./styles"

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
}

const theme = extendTheme({
  ...foundations,
  components,
  styles,
  config,
})

export default theme;