import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: '',
            //  value: false
        }
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
            // value: !this.state.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" value={this.state.value} onChange={this.handleChange}></input> */}
                    {/* <input type="checkbox" value={this.state.value} onChange={this.handleChange}></input> */}
                    {/* <textarea value={this.state.value} onChange={this.handleChange}></textarea> */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                    </select>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )
    }
}
