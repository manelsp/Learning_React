import React, { Component } from 'react';
import './App.css';

class Cuadrado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeros: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
      ]
    }
  }

  cambiarValor = (value, indiceX, indiceY) => {
      let newArray = this.state.numeros;
      newArray[indiceY][indiceX] = value;
      this.setState({
          numeros: newArray
      });
  }

  render() {
      let cols = new Array(3);
      cols.fill(0);
      var sumDiagonal = 0;
      const inputs =
          <tbody>{
              this.state.numeros.map((row, i) => {
                  return (
                      <tr key={i}>
                          {row.map((val, j) => {
                              if (i === j) sumDiagonal += val;
                              cols[j] += val;
                              return (
                                  <td key={j+"-"+i}>
                                      {(<Input y={j} x={i} valor={val} cambiarValor={this.cambiarValor} />)}
                                  </td>
                              )
                          })}
                          <td>{row.reduce((total, value) => total += value)}</td>
                      </tr>
                  )
              })
          }
              <tr>
                  {cols.map((valor, indice) => <td key={indice}>{valor}</td>)}
                  <td>{sumDiagonal}</td>
              </tr>
          </tbody>;
      return (
          <table>
              <thead></thead>
              {inputs}
          </table>
      )
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: this.props.valor
    }
  }

  cambiarValor = (event) => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      })
      this.props.cambiarValor(isNaN(parseInt(value)) ? 0 : parseInt(value), this.props.y, this.props.x);
  }

  render() {
      return <input type="number" onChange={this.cambiarValor} name="valor" value={this.state.valor} />
  }
}

export default Cuadrado;