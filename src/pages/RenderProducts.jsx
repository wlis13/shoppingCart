import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styleProject.css';

class RenderProducts extends Component {
  handleCart = () => {
    const products = JSON.parse(localStorage.getItem('product')) || [];
    const { title, price, image, quant } = this.props;
    const objectProducts = {
      Title: title,
      Price: price,
      Image: image,
      Quant: quant,
    };
    localStorage.setItem(
      'product',
      JSON.stringify([...products, objectProducts])
    );
  };

  render() {
    const { title, price, image, quant } = this.props;
    return (
      <div className="square-products">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <h3>{`R$${price}`}</h3>
        <p>{`quantidade disponível: ${quant}`}</p>
        <button className="button-cart" type="button" onClick={this.handleCart}>
          colocar no carrinho
        </button>
      </div>
    );
  }
}

export default RenderProducts;

RenderProducts.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quant: PropTypes.number.isRequired,
};
