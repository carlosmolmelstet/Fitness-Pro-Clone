import React from "react";
import { Flex, Link, theme } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

export function SocialMedia() {
    return (
        <Flex>
            <Link mr={8} href="https://github.com/carlosmolmelstet" target="_blank">
                <Icon size={16} name="facebook" color={theme.colors.gray[500]} />
            </Link>
            <Link mr={8} href="https://github.com/carlosmolmelstet" target="_blank">
                <Icon size={16} name="twitter" color={theme.colors.gray[500]} />
            </Link>
            <Link mr={8} href="https://github.com/carlosmolmelstet" target="_blank">
                <Icon size={16} name="instagram" color={theme.colors.gray[500]} />
            </Link>
        </Flex >
    );
}