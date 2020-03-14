import React, { Component } from 'react'

class Increment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    
    incrementCounter() {
        // this.setState({
        //     counter: this.state.counter + 1
        // }, () => {
        //     console.log(this.state.counter)
        // })
        // when using previous state better to use this
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log(this.state.counter)
        })
        console.log(this.state.counter)
    }
    // incrementCounter = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         counter: this.state.counter + 1
    //     }, () => {
    //         console.log(this.state.counter)
    //     })
    //     console.log(this.state.counter)
    // }

    incrementCounterByFive() { 
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.incrementCounter}>Value is: {this.state.counter}</button> */}
                <button onClick={() => this.incrementCounterByFive()}>Value is: {this.state.counter}</button>
            </div>
        )
    }
}

export default Increment
