import React, { Component } from 'react'
import Inputs from './Inputs'

export default class TemperatueCalculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             scale: 'c',
             temp: 0
        }
    }
    handleCelsius = (event) => {
        this.setState({
            scale: 'c',
            temp: event.target.value
        })
    }
    handleFohrenheit = (event) => {
        this.setState({
            scale: 'f',
            temp: event.target.value
        })
    }
    
    render() {
        const temp = this.state.temp
        const scale = this.state.scale
        const celsius = scale === 'f' ? convert(temp, toCelsius)  : temp
        const fohrenheit = scale === 'c' ? convert(temp, toFehrenheit)  : temp
        return (
            <div>
                <Inputs scale="Celsius" value={celsius} func={this.handleCelsius}></Inputs>
                <Inputs scale="Fohrenheit" value={fohrenheit} func={this.handleFohrenheit}></Inputs>
            </div>
        )
    }
}

function convert(temperature, convertFunction) {
    return convertFunction(temperature)
}
function toCelsius(fohrenheit) {
    return (fohrenheit - 32) * 5/9
}
function toFehrenheit(celsius) {
    return (celsius * 9/5) + 32
}