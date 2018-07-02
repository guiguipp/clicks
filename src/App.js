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
      tally: 0,
      top: 0,
      message: "Welcome to the Click game!"
    }
  
  componentDidMount(){
    this.loadPres()
  }
  
  handleClick = (president) => {    
    
    const numToString = (number) => {
      switch (number) {
        case 1:
        return number = "st"
        
        case 2:
        return number = "nd"
        
        case 3:
        return number = "rd"
        
        default:
        return number = "th"
        
      }
    }
    // id of the president clicked
    const presId = Number(president.target.id)
    // cloning this.state
    const newState = {...this.state};
    console.log("newState: ", newState)
    
    if (newState.guess === presId) {
      newState.guess = newState.guess +1;
      newState.tally = newState.tally +1;
      let pres = this.state.presidents[presId-1]
      newState.message = `This is correct!\n${pres.name} (${pres.life}) was the ${presId}${numToString(presId)} president of the United States. \nHe stayed in office: ${pres.office}`
      this.setState(newState)
      if (newState.tally > newState.top) {
        newState.top = newState.tally
        this.setState(newState)
        }
      }
    else {
      newState.guess = 1;
      newState.tally = 0;
      newState.message = "This is incorrect"
      this.setState(newState)
    }
  }

  loadPres = () => {
    console.log("Where they will be loading randomly")
  }
  

  render() {
    return (
      <div>
        <div>
          <Nav>
            {this.state}
          </Nav> 
          
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
