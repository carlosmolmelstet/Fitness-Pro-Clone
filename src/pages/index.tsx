import { Button, Heading, useColorMode, Text } from "@chakra-ui/react";
import Icon from '../components/Icon/index';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Icon name="moon" />
      <Heading>Titulooo</Heading>
      <Text>Titulooo</Text>
    </header>
  )
}