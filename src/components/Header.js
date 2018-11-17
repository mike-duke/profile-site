import React, { Component } from 'react';
import '../styles/Header.scss';

export default class Header extends Component {
  constructor() {
    super();
  }

  navigateToPage = (event) => {
    this.props.updatePage(event.target.innerText);
  }

  render() {
    return (
      // <header>
        <div className="links">
          <p onClick={this.navigateToPage} className="nav-links">home</p>
          <p onClick={this.navigateToPage} className="nav-links">story</p>
          <p onClick={this.navigateToPage} className="nav-links">projects</p>
          {/* <p onClick={this.navigateToPage} className="nav-links">writing</p> */}
          <p onClick={this.navigateToPage} className="nav-links">contact</p>
        </div>
      // </header>
    )
  }
}