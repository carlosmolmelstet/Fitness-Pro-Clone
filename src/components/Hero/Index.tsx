import { Flex, useColorMode, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Illustrations } from "./Illustrations";
import { ScrollButton } from "./ScrollButton";

export function Hero() {
    const { colorMode } = useColorMode();

    return (
        <Flex justify="space-between">
            <Flex direction="column" w="40%" mt="18%">
                <Text
                    color="gray.500"
                    fontWeight="bold"
                    mb={3}
                >
                    TRAIN SMARTER. GET STRONGER
                </Text>
                <Heading
                    fontFamily="SF Pro Display"
                    mb={5}
                    fontSize="64px"
                    lineHeight="1"
                    letterSpacing="-.02em"
                >
                    Simple fitness experience for everyone.
                </Heading>
                <Text
                    mb={10}
                    color="gray.500"
                >
                    Track your workouts, get better results, and be the bestversion of you. Less thinking, more lifting.
                </Text>
                <Flex>
                    <Button size="lg">Download App</Button>
                    <Button ml={4} size="lg" variant="outline">Book a Class</Button>
                </Flex>
                <ScrollButton />
            </Flex>
            <Illustrations />
        </Flex>
    );
}