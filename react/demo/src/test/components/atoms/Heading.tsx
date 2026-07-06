interface HeadingProps {
    title: string;
    size: number;
}
const Heading = ({ title, size }: HeadingProps) => {
    return (
        <h1 style={{ fontSize: `${size}px`}}>{title}</h1>
    )
}


export default Heading;