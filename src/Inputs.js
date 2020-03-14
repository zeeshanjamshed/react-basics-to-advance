import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Scale {this.props.scale}</legend>
                    <input value={this.props.value} onChange={this.props.func}/>
                </fieldset>
            </div>
        )
    }
}
