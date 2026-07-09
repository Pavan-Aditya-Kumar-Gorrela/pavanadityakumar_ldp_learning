import React from 'react';


class ClassComponent extends React.Component{
    // componentDidMount(){
    //     console.log("Class Component Mounted");
    // }

    componentWillUnmount(){
        console.log("Class Component Unmounted");
    }

    render(){
        return <h1>This is a Class Component</h1>;
    }
}

export default ClassComponent;