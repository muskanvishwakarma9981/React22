import React from "react";

class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.State = {name: "alok"}
        console.log("1. CONSTRUCTOR method")
    }
    componentDidMount(){
        console.log("2. componentDidmount method")
    }
    componentDidUpdate(){
        console.log("4. update method")
        this.setState({name:"akash"})
    }
    render(){
        return(
        <>
        <h1>DOM</h1>
        <h2>{this.State.name}</h2>
        {
            console.log("3. render method")
        }
        </>
    )
}
}

export default Lifecycle;