import { Flex, Image, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Menu } from './Menu'

export function Navbar() {
    const { colorMode } = useColorMode();

    return (
        <Flex
            py={12}
            align="center"
            justify="space-between"
        >
            <Flex
                align="center"
            >
                <Image
                    src={colorMode == "dark" ? "assets/images/logo-light.svg" : "assets/images/logo-dark.svg"}
                    alt="Fitness Pro"
                    maxW="166px"
                />
                <Menu />
            </Flex>
            <Button variant="outline" size="sm">Get free trial</Button>
        </Flex>
    );
}