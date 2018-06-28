import React, { Component } from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import presidents from "./presidents.json";
import './App.css';

class App extends Component {
  // information passed as this.state.presidents will be the presidents json array
  state = {
    presidents
  };
  render() {
    console.log("Presidents: ", presidents)
    // console.log("State: ", state)
    console.log(presidents[0].image)
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          {this.state.presidents.map(president => (
            <Card 
              id={president.id}
              key={president.id}
              name={president.name}
              image={president.image}
              office={president.office}
              life={president.life}
            />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
