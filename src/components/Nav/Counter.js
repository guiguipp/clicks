import React from "react";
// import "./Counter.css";

const Counter =  props => (
    // console.log("this props: ", this.props, "props: ", props, "props.guess: ", props.children.guess, " props.tally: ",props.tally)
    <div className="counter">
        <span>Score: {props.children.tally} | Top Score: {props.children.top}</span>
    </div>
    )

export default Counter;