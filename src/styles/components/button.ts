import { mode, transparentize } from "@chakra-ui/theme-tools"
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools"

const baseStyle: SystemStyleObject = {
  lineHeight: "1",
  borderRadius: "full",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
}


const variantOutline: SystemStyleFunction = (props) => {
  return {
    border: "2px solid ",
    borderColor: mode("gray.300","gray.500")(props),
    fontFamily: "SF Pro Display",
    _hover: {
      bg:  mode("gray.800","none")(props),
      borderColor: "gray.100",
      color: "gray.100"
    },
  }
}

const variantSolid: SystemStyleFunction = (props) => {
  return {
    bg: "brand.800",
    color: "gray.100",
    fontFamily: "SF Pro Display",
    _hover: {
      bg: "brand.900",
    },
  }
}


const variantUnstyled: SystemStyleObject = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
}

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  unstyled: variantUnstyled,
}

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "md",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    h: 10,
    minW: 18,
    fontSize: "14px",
    px: 3.5,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2,
  },
}


const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "gray",
}

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
}
