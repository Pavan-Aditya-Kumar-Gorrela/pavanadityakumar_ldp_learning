import React from "react";
class ClassComponent extends React.Component<Record<string, never>, { count: number }>{
    constructor(props: Record<string, never>){
        super(props);
            this.state = {
                count:0
            };
    }
    render(){
        return (
            <div>
                <h1>This is a Class Component</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
            </div>
        )
    }
}

export default ClassComponent;