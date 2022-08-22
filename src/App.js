import React from 'react';


class App extends React.Component {
  state ={
    numeroDeCliques: 0
  }
  handleClick = (numero) => {
   this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + numero
   }))
  }
  handleClickLess = (numero) => {
    this.setState((estadoAnterior, _props) => ({
     numeroDeCliques: estadoAnterior.numeroDeCliques - numero
    }))
   }
  render() {
    const {numeroDeCliques} = this.state;
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>clique</button>
        <button onClick={() => this.handleClickLess(1)}>clique</button>
        <p>{numeroDeCliques}</p>
      </div>
    );
  }
}

export default App;
