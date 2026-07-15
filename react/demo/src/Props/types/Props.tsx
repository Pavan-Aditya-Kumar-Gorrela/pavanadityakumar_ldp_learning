type UserProps= {
    name: string;
    age: number;
    isAdmin: boolean;
    skills: string[];
    onClick: () => void;
}

const User = (props: UserProps) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Admin: {props.isAdmin ? "Yes" : "No"}</h3>
            <h4>Skills: {props.skills.join(", ")}</h4>
            <button onClick={props.onClick}>Click Me</button>
        </div>
    );
}

export default User;
