import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: true
        }
    }
    handleClick = () => {
        this.setState({
            value: !this.state.value
        })
    }
    
    render() {
        if(this.state.value === true) {
            return (
                <div>
                    <button onClick={this.handleClick}>Change the message</button>
                    <Child1></Child1>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>Change the message</button>
                    <Child2></Child2>
                </div>
            )
        }
    }
}

export default Main
