import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { responseApiId } from '../api';
import { BsCart } from 'react-icons/bs';
import '../categoria.css';
import RenderProducts from './RenderProducts';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      message: false,
      resultSearch: [],
      a: [],
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = async () => {
    const { inputValue } = this.state;
    this.setState({ message: true });
    const callApi = await responseApiId(inputValue);
    this.setState({ message: false });
    this.setState({ resultSearch: callApi.results });
  };

  render() {
    const { resultSearch, message } = this.state;
    return (
      <div>
        <nav className="link-field">
          <Link to="/card" className="cart">
            Carrinho
            <BsCart data-testid="icone" />
          </Link>
        </nav>
        <form>
          <h2>Encontre seu produto</h2>
          <label htmlFor="input-name">
            <input
              type="text"
              id="input-name"
              name="nameInput"
              placeholder="digite o nome do produto"
              onChange={this.handleChange}
            />
          </label>
          <button type="button" onClick={this.handleSearch}>
            Search
          </button>
        </form>
        {message ? <h2>Carregando...</h2> : null}
        <section>
          {resultSearch.map((itens, index) => (
            <RenderProducts
              key={index}
              title={itens.title}
              price={itens.price}
              image={itens.thumbnail}
              quant={itens.sold_quantity}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Home;
