type Props = {
    name: string;
    age?: number;
}

const Greet = (props: Props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            {props.age && <h2>Age: {props.age}</h2>}
        </div>
    );
}

export default Greet;