import { Button, theme } from "@chakra-ui/react";
import { motion } from "framer-motion"
import Icon from "../Icon/Index";

export function ScrollButton() {
    return (
        <Button
            variant="unstyled"
            borderRadius="full"
            w={16}
            h={16}
            border="2px solid"
            borderColor="gray.700"
            alignItems="flex-start"
            display="flex"
            justifyContent="center"
            overflow="hidden"
            position="absolute"
            top="92vh"
            _hover={{
                borderColor: "gray.400"
            }}
        >
            <motion.div
                animate={{ y: ["-16px", "23px", "23px", "60px"], x: 0 }}
                transition={{ repeat: Infinity, duration: 2,}}
            >
                <Icon name="arrow-down" size={14} color={theme.colors.gray[600]}  />
            </motion.div>
        </Button>
    );
}