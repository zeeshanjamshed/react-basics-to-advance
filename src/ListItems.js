import React, { Component } from 'react'

export default class ListItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cartoons: ['Pikachu', 'Alladin']
        }
    }
    
    render() {
        const cartoons = this.state.cartoons.map((cartoon, index) => <li key={index}>{cartoon}</li>)
        return (
            <div>
                <ul>
                    {cartoons}
                </ul>
            </div>
        )
    }
}
