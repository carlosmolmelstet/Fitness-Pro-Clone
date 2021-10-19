import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon/Icon";
import { MenuLink } from './MenuLink';
import { SocialMedia } from "./SocialMedia";

const menuItems = [
    { id: 1, name: "Features", isDropdown: false },
    { id: 2, name: "Pricing", isDropdown: false },
    { id: 3, name: "Download", isDropdown: false },
    { id: 4, name: "Class", isDropdown: true },
    { id: 5, name: "Lifestyle", isDropdown: false },
]

export function Menu() {
    const { colorMode } = useColorMode();


    return (
        <Flex
            pl={12}
            align="center"
            justify="space-between"
            maxW="795px"
            borderLeft="1px solid"
            borderColor={colorMode == "dark" ? "gray.700" : "gray.300"}
            h={12}
            ml={12}
        >
            <Flex  align="center">
                {menuItems.map(item => (
                    <MenuLink key={item.id} name={item.name} isDropdown={item.isDropdown} />
                ))}
            </Flex>
        </Flex>
    );
}