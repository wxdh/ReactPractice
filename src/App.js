import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as data from './pizza.json';

class PizzaApp extends Component {
    state = {
        pizzas: []
    }

    componentDidMount() {
        data.get('../pizza.json').then((pizzas) => {
            console.log(pizzas)
            this.setState({pizzas: pizzas})
        })
    }

    render() {
        return (
          <div className="app">
              <h1>Pizza toppings</h1>
              {this.state.data.pizzas.map(function(pizza) {
                  return <h3>{pizza}</h3>
              })}
          </div>
        )
    }
}
