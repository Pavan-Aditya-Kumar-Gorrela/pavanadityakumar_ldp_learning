import React from "react";

type ChildProps = {
  name: string;
};

class Child extends React.Component<ChildProps> {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

class Parent extends React.Component {
  render() {
    return <Child name="Aditya" />;
  }
}

export default Parent;