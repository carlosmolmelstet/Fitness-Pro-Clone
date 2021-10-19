import React from "react";
import { Flex, Image, Button, useColorMode, useBreakpointValue, Drawer, DrawerContent, Icon } from "@chakra-ui/react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Menu } from './Menu'
import { SocialMedia } from "./SocialMedia";

export function Navbar() {
    const { colorMode } = useColorMode();
    const isDrawerMenu = useBreakpointValue({
        base: true,
        xl: false,
    });

    if (isDrawerMenu) {
        return (
            <Flex
                py={12}
                align="center"
                justify="space-between"
            >
                <Image
                    src={colorMode == "dark" ? "assets/images/logo-light.svg" : "assets/images/logo-dark.svg"}
                    alt="Fitness Pro"
                    maxW="166px"
                />
                <Flex align="center">
                    <Button minW="110px" variant="outline" size="sm">Get free trial</Button>
                    <Icon ml={12} color={colorMode == "dark" ? "gray.500" : "gray.500"} fontSize="24px" as={HiOutlineMenuAlt4} />
                </Flex>
            </Flex>

        )
    }

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
            <SocialMedia />
            <Button minW="110px" variant="outline" size="sm">Get free trial</Button>
        </Flex>
    );
}