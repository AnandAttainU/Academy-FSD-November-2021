import React from 'react';

export default class LifeCycleExample extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        console.log("Constructor is called");
    }

    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter-1
        })
    }

    componentDidMount() {
        console.log("Component Did Mount is called");
    }

    componentDidUpdate() {
        console.log("Component Did Update is called");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount is called");
    }

    render(){
        console.log("Render is called");
        return (
            <>
                <h1>Life cycle method example</h1>
                <div>
                    <button onClick={this.increment}>Add to cart</button>
                    <p>{this.state.counter}</p>
                    <button onClick={this.decrement}>Remove from cart</button>
                </div>
            </>
        )
    }
}