import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler() {
        console.log('button clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
