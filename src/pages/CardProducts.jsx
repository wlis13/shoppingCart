import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderCart from './RenderCart';

class CardProducts extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const getValues = JSON.parse(localStorage.getItem('product'));
    this.setState({ results: [...getValues] });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="title">
        <h3>Este é o seu carrinho</h3>
        {results.map((itens, index) => (
          <RenderCart
            key={index}
            name={itens.Title}
            price={itens.Price}
            image={itens.Image}
          />
        ))}
        <Link to="/form">Finalizar compra</Link>
      </div>
    );
  }
}

export default CardProducts;
