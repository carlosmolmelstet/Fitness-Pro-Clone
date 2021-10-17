import { Flex, Text, Box, theme } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon/Icon";

interface MenuLinkProps {
    name: string;
    isDropdown: boolean
}

export function MenuLink({ name, isDropdown }: MenuLinkProps) {
    return (
        <Flex
            py={4}
            px={2}
            color="gray.500"
            fontSize={14}
            fontWeight="semibold"
            fontFamily="SF Pro Display"
            mr={8}
            align="center"
            transition=".2s"
            _hover={{
                color: theme.colors.gray[200],
                cursor: "pointer",
                '&>svg path': {fill: theme.colors.gray[200]}
            }}
        >
            <Text>
                {name}
            </Text>
            {isDropdown && (
                <Box ml={3}>
                    <Icon name="arrow-bottom" size={10} color={theme.colors.gray[500]} />
                </Box>
            )}
        </Flex>
    );
}


