import React, { Component } from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import presidents from "./presidents.json";
import _ from 'underscore';
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
    /*
      // Using the shuffling algorithm to display presidents randomly
      loadPres = () => {
        // cloning the array
        let presidents = {...this.state.presidents};
        console.log(presidents)
        let shuffledArray = []
        this.randomize(Object.values(presidents),shuffledArray)
        // console.log("newState: ", newState)
        // this.setState(newPresidents
      }
      randomize = (inputArray, outputArray) => {
        // console.log("Randomize calling itself")
        if(inputArray.length > 0) {
          let randomPres = inputArray[Math.floor(Math.random()*inputArray.length)];
          let index = inputArray.indexOf(randomPres);
          outputArray.push(randomPres);
          inputArray.splice(index,1);
          this.randomize(inputArray,outputArray)
          console.log("Output Array before being pushed via setState: ", outputArray)
          this.setState({
            presidents: outputArray
          })
        }
        }*/
    
  componentWillMount(){
    console.log("doing something")
    const newState = {...this.state};
    this.setState({...newState, presidents: _.shuffle(presidents)})
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
    // console.log("newState: ", newState)
    
    if (newState.guess === presId) {
      newState.guess = newState.guess +1;
      newState.tally = newState.tally +1;
      let pres = presidents[presId-1] // because array starts at 0
      newState.message = `This is correct!\n${pres.name} (${pres.life}) was the ${pres.id}${numToString(pres.id)} president of the United States. \nHe stayed in office: ${pres.office}`
      this.setState({...newState, presidents: _.shuffle(presidents)})
      // this.loadPres()
      // loadPress()
      if (newState.tally > newState.top) {
        newState.top = newState.tally
        this.setState({...newState, presidents: _.shuffle(presidents)})
        }
      }
    else {
      newState.guess = 1;
      newState.tally = 0;
      newState.message = "This is incorrect."
      this.setState({...newState, presidents: _.shuffle(presidents)})
    }
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