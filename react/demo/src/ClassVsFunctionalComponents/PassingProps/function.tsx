interface FunctionalComponentProps {
    name: string;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({ name }) => {
    return <h1>Hello, {name}! This is a Functional Component</h1>;
}

export default FunctionalComponent;