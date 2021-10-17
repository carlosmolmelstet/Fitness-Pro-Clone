import { theme, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Icons } from './IconsList';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function Icon({ name, size, color }: IconProps) {
  const { colorMode } = useColorMode();

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 16 16"
    >
        <path d={Icons[name]}  fill={color != null ? color : colorMode == "dark" ? theme.colors.gray[100] :  theme.colors.gray[400] }></path>
    </svg>
  );
};

