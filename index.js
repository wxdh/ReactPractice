import fetch from 'isomorphic-fetch';
import React from 'react';
import data from './pizza.json';

class App extends React.Component {
  render() {
    return(
      <h1>Hello</h1>
      /*<ul>
        {
          data.map(function(toppings) {
            return <li>toppings.pizzas</li>
          })
        }
      </ul>*/
    )
  }
}

export default App;
// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors
