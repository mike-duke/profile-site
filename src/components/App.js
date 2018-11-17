import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.scss';
import '../styles/normalize.css';
import Header from './Header.js';
import ContactForm from './ContactForm.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'home'
    }
  }

  updatePage = (pageName) => {
    this.setState({
      page: pageName
    })
  }

  render() {
    switch (this.state.page) {
      case 'home':
        return (
          <div className="App">
            <Header updatePage={this.updatePage} />
            <p>Welcome! my name is mike and i enjoy solving problems and telling stories with interesting websites.</p>
          </div>
        )
      case 'contact':
        return (
          <div className="App">
            <Header />
            <ContactForm />
          </div>
        )
    }
  }
}

export default App;
