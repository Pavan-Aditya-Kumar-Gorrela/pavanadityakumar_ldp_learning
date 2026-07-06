import React, { type JSX } from 'react';

interface HeadingProps {
    text: string;
    level?: 1|2|3;
}

const Heading: React.FC<HeadingProps> = ({text, level = 1}) => {

    const styles : React.CSSProperties = {
        color: "#1a1a1a",
        margin : "0 0 8px 0",
        fontFamily: "system-ui, sans-serif",
        fontWeight: level === 1 ? 800 : 600,
        fontSize: level === 1 ? '32px' : level === 2 ? '24px' : '18px',
    };

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag style={styles}>{text}</Tag>;
}

export default Heading;