import { Button, Heading, useColorMode, Text, Box, Container } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/Hero/Index";
import { Navbar } from "../components/Navbar/Index";
// import Icon from '../components/Icon/index';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
     maxW="container.xl"
     px={20}
     h="100vh"
     >
      <Navbar />
      <Hero />
    </Container>
  )
}