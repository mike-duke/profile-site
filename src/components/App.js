import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.scss';
import '../styles/normalize.css';
import Header from './Header.js';
import ContactForm from './ContactForm.js';

class App extends Component {
  constructor() {
    super();
    this.fadeIn = React.createRef();
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
            <div className="home-text">
              <p className="fade-in" ref={this.fadeIn}>FADE IN:</p>
              <p></p>
              <p className="logline">INT. <a href="#" onClick={console.log('your text here')}>HOME</a> - NOW</p>
              <p className="scene-description-1">MIKE DUKE - late 30s, unconventionally handsome, software developer - stands and addresses the audience.</p>
            
              <div className="dialog-text">
                <p className="character-name">MIKE DUKE</p>
                <p>Welcome! My name is Mike and I'm excited about creating websites that solve interesting problems and tell interesting stories. If you'd like to know more about me, please check out <a href="#" onClick={console.log('to scroll?')}>my story</a></p>
              </div>
            </div>
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
