import React from "react";
interface ClassComponentProps {
    name: string;
}
class ClassComponent extends React.Component<ClassComponentProps> {
    render() {
        return <h1>Hello, {this.props.name}! This is a Class Component</h1>;
    }
}

export default ClassComponent;