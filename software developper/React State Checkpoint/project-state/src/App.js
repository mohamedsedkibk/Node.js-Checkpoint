import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';


class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer and tech enthusiast.',
        imgSrc: 'https://example.com/john-doe.jpg',
        profession: 'Software Engineer'
      },
      shows: false,

    };
  }

 

  handleShow = () =>  {
   this.setState({
    shows : !this.state.shows
   })
  }

  render() {

    return (
      <div className="App">
          <button onClick={this.handleShow}> {
          this.state.shows ? "this is the result" : "show profile"
        }</button>
        
        {
          this.state.shows ? <Profile data= {this.state.person}/> : <h1>fama chay</h1>
        }
        
        </div>
      
    );
  }
}

export default App;





