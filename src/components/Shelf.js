import React, { Component } from 'react'
import ProductList from './ProductList'

export default class Shelf extends Component {

    handleProductItemClick = (item) => {
        console.log('Shelf handleProductItemClick', item);
        this.props.onProductItemClick(item);
    }

    render() {
        return (
            <div>                
                <ProductList onProductItemClick={ (item) => this.handleProductItemClick(item) } />
            </div>
        )
    }
}
