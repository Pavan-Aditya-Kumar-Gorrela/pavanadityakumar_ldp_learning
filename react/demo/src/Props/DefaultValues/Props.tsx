type Props= {
    name?: string;
}

const Greet = ({name = "Guest"}: Props) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default Greet;