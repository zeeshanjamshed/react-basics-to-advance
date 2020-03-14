import React, { Component } from 'react'
import Cartoon from './Cartoon'

class CartoonClass extends Component {
    render() {
        return (
            <div>
                <Cartoon name="Alladin"></Cartoon>
                <Cartoon name="Pikachu"></Cartoon>
            </div>
        )
    }
}

export default CartoonClass
