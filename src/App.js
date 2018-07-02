import React, { Component } from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import presidents from "./presidents.json";
import './App.css';

// function handleClick(e) {
//     e.preventDefault()
//     console.log("Clicked")
// }
class App extends Component {
  // information passed as this.state.presidents will be the presidents json array
  state = {
    presidents,
    guess: 1,
    tally: 0
  };
  
  // constructor(props) {
  //   super(props);
    // state = {
    //   guess: 1,
    //   tally: 0
    // }
  // }

  handleClick = (president) => {    
    const presId = Number(president.target.id)
    console.log("presID: ", presId)
    console.log("Guess: ", this.state.guess)
    console.log("Tally: ", this.state.tally)
    
    if (this.state.guess === presId) {
      console.log("Good guess")
      this.setState({
        guess: this.state.guess + 1,
        tally: this.state.tally + 1
        })
      // this.state.tally++
      // guess + 1;
    }
    else {
      console.log("Bad guess")
      this.setState({
        guess: 1,
        tally: 0,
        })
    }
  }
  

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <Wrapper>
          {this.state.presidents.map(president => (
            <Card 
              id={president.id}
              key={president.id}
              name={president.name}
              image={president.image}
              office={president.office}
              life={president.life}
              onClick={this.handleClick}
            />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
