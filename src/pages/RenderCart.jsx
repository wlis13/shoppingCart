import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderCart extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <h3>{price}</h3>
      </div>
    );
  }
}

export default RenderCart;

RenderCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
