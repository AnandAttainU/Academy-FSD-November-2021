import React from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter-1
        })
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>Add to cart</button>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement}>Remove</button>
            </div>
        )
    }
}


export default Counter;