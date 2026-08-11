import React from "react";

type Props = {
    onClick: () => void;
};

const Child = ({ onClick }: Props) => {
    console.log("Child Rendered");

    return <button onClick={onClick}>Child Button</button>;
};

export default React.memo(Child);