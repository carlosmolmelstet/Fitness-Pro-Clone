import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { IllustrationItem } from "./IllustrationItem";

export function Illustrations() {
    const { colorMode } = useColorMode();

    return (
        <Box
            position="relative"
            w="50%"
        >
            <IllustrationItem
                top="30px"
                right="60px"
                maxW=" 230px"
                zIndex={1}
                src="assets/images/bottle.png"
                alt=""
                delay={1}
            />
            <IllustrationItem
                top="100px"
                right="95px"
                maxW=" 512px"
                zIndex={2}
                src={colorMode == "dark" ?  "assets/images/watch-dark.png" : "assets/images/watch.png"}
                alt=""
            />
            <IllustrationItem
                top="315px"
                right="0"
                maxW=" 230px"
                zIndex={3}
                src="assets/images/ball.png"
                alt=""
                delay={1.4}
            />
            <IllustrationItem
                top="520px"
                left="5px"
                maxW=" 230px"
                zIndex={4}
                src="assets/images/ball-black.png"
                alt=""
                delay={1.6}
            />
        </Box>
    );
}