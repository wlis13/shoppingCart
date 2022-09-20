import React, { Component } from 'react';

class Form extends Component {
  state = {
    getValues: [],
    getPrices: [],
    Soma: 0,
  };

  componentDidMount() {
    const values = JSON.parse(localStorage.getItem('product'));
    this.setState({ getValues: [...values] });
    const { getValues } = this.state;
    getValues.map((itens) => this.setState({ getPrices: [...itens.Price] }));
  }

  render() {
    const { getValues } = this.state;
    let soma = 0;
    for (let index = 0; index < getValues.length; index++) {
      soma += Number(parseInt(getValues.map((itens) => itens.Price)));
    }

    return (
      <div>
        <h1>Confira seus produtos</h1>
        <section>
          {getValues.map((itens, index) => (
            <div key={index}>
              <h3>{itens.Title}</h3>
              <img src={itens.Image} alt={itens.Title} />
            </div>
          ))}
          <h3>{`valor total da compra: R$${soma.toFixed(2)}`}</h3>
        </section>
        <h2>Preencha o formulário para finalizar a compra</h2>
        <form className="form" action="">
          <label htmlFor="input-name">
            <input type="text" id="input-name" placeholder="digite seu nome:" />
          </label>
          <label htmlFor="input-email">
            <input
              type="text"
              id="input-email"
              placeholder="digite seu Email:"
            />
          </label>
          <label htmlFor="input-cep">
            <input type="text" id="input-cep" placeholder="digite seu CEP:" />
          </label>
          <label htmlFor="input-endereço">
            <input
              type="text"
              id="input-endereço"
              placeholder="digite seu Endereço:"
            />
          </label>
          <label htmlFor="input-cpf">
            <input type="text" id="input-cpf" placeholder="digite seu CPF:" />
          </label>
          <h3>Escolha a forma de pagamento</h3>
          <label htmlFor="input-name">
            Boleto
            <input
              type="radio"
              id="input-name"
              placeholder="digite seu nome:"
            />
          </label>
          <h4>Cartão de crédito</h4>
          <section>
            <label htmlFor="input-name">
              Master Card
              <input
                type="radio"
                id="input-name"
                placeholder="digite seu nome:"
              />
            </label>
            <label htmlFor="input-name">
              Visa
              <input
                type="radio"
                id="input-name"
                placeholder="digite seu nome:"
              />
            </label>
            <label htmlFor="input-name">
              Elo
              <input
                type="radio"
                id="input-name"
                placeholder="digite seu nome:"
              />
            </label>
          </section>
          <button type="submit">Confirmar compra</button>
        </form>
      </div>
    );
  }
}

export default Form;
