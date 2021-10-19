import { Button, theme, useColorMode} from "@chakra-ui/react";
import { motion } from "framer-motion"
import Icon from "../Icon/Icon";

export function ScrollButton() {
    const { colorMode } = useColorMode();

    return (
        <Button
            variant="unstyled"
            borderRadius="full"
            w={16}
            h={16}
            border="2px solid"
            borderColor={colorMode == "dark" ? "gray.700" : "gray.300"}
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
                <Icon name="arrow-down" size={14} color={colorMode == "dark" ? theme.colors.gray[600] : theme.colors.gray[500]}  />
            </motion.div>
        </Button>
    );
}