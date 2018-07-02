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
    presidents
  };
  // handleClick = event => {
  //   // Get the id of the president clicked (which is their #)
  //   const presId = event.target.attributes.getNamedItem("id").value;
  //   console.log(presId)
  // }
  /*onItemClick: function(item, e) {
    console.log("item")
    // const presId = this.props.data.id;
    console.log("The card was clicked: ", presId)
  }*/
  /*componentDidMount(){
    function handleClick (e) {
      e.preventDefault()
    }
  }*/
  handleClick = (president) => {
    console.log('click')
    const presId = president.target.id
    console.log("presID: ", presId)
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
