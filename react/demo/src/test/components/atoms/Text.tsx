import type { ReactNode } from "react";
interface TextProps {
    children: ReactNode;
}

const Text = ({children}: TextProps) => {
    return (
        <p>{children}</p>
    )
}

export default Text;