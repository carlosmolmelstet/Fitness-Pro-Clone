import { Button } from "@chakra-ui/react";

interface ButtonOutilineProps {
    name: string;
}

export function ButtonOutiline({name} : ButtonOutilineProps) {
    return (
        <Button>
            {name}
        </Button>
    );
}