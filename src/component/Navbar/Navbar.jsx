import React, { Component } from 'react';
import Search from './../Features/Search';
import { NavLink } from 'react-router-dom';
// import "/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
          <div className="topnav">
            <NavLink to="/home"  href="#home">Home</NavLink>
            <NavLink to="/create"  href="#home">Create</NavLink>
            
            <Search pholder={"Search poke..."} />
           </div>
      </nav>
    )
  }
}

export default Navbar;