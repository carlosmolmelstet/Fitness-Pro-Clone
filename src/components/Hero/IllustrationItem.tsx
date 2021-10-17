import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion"

interface IllustrationItemProps {
    delay?: number;
    top: string;
    right?: string;
    left?: string;
    maxW: string;
    zIndex: number;
    src: string;
    alt?: string;
}

export function IllustrationItem({
    delay = 0,
    top,
    right,
    left,
    maxW,
    zIndex,
    src,
    alt,
} : IllustrationItemProps) {
    const animation = {
        hidden: {
            opacity: 0,
            y: "50px",
            x: 0,
            z: 999
        },
        visible: {
            opacity: 1.5,
            y: 0,
            x: 0,
            z: 999,
            transition: {
                default: { duration: 1, delay: delay },
            }
        }
    }

    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
        >
            <Image
                position="absolute"
                top={top}
                right={right}
                left={left}
                maxW={maxW}
                zIndex={zIndex}
                src={src} 
                alt={alt} />
        </motion.div>
    );
}