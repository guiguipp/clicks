import React from "react";
import "./Nav.css";
import "./Message";
import { Navbar } from "reactstrap";

const Nav = () => (
    <Navbar className="navbar-dark background-dark bg-info">
        <div className="row">
            <div className="col">
                <h3 className="navbar-brand">
                    Game of clicks
                </h3>
            </div> 
            <div className="col">
                Welcome Message
            </div> 
            <div className="col">
                Counter
            </div> 

        </div>
    </Navbar>
);

export default Nav;