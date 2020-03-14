import React, { Component } from 'react'

class Time extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.start()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    start = () => {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <div>
                <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Time
