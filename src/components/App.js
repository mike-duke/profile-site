import React, { Component } from 'react';
import '../styles/App.scss';
import '../styles/normalize.css';
import Header from './Header.js';
// import ContactForm from './ContactForm.js';

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
    return (
      <div className="App" id="home">
        <Header updatePage={this.updatePage} />
        <section className="home-text">
          <p className="fade-in" ref={this.fadeIn}>FADE IN:</p>
          <p className="logline">INT. <a href="#home" onClick={console.log('your text here')}>HOME</a> - NOW</p>
          <p className="scene-description-1">
            <span className="name">MIKE DUKE: </span>
            <span className="age">late 30s, </span> 
            <span className="physical-description">unconventionally handsome, </span>
            <span className="temperment">writer and software developer--</span>
            <span className="action">stands and addresses the audience.</span>
          </p>
        
          <div className="dialog-container">
            <p className="character-name">MIKE DUKE</p>
            <p className="dialog">
              {`Welcome! 
              My name is Mike and I love telling stories, whether through fiction or through interesting and exciting software. If you'd like to know more about me, please check out `}
              <a href="#story">my story</a> or <a href="#projects">my projects</a>
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
