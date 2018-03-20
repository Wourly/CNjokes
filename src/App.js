import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import RetrieveChuck from './RetrieveChuck';
import Categories from './Categories';

const basePoint = 'https://api.chucknorris.io/jokes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesList: [],
    }

    this.fetchJoke = this.fetchJoke.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchJoke(){
    fetch( basePoint + '/random')
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
  }
  
  handleChange(event) {
    const target = event.target;
    const name = target.name;

    fetch( basePoint + '/random?category=' + name)
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) )
  }
  
  render(){
    const { jokesList } = this.state;
    return (
      <div>
        <div className="jumbotron text-centered">
          <h1>The CHUCKINATOR 5000</h1>
        </div>
        <div className="col col-md-1 btn-group-vertical">
          <Categories handleChange={this.handleChange} basePoint={basePoint}/>
        </div>
        <div className="col col-md-11">
          { jokesList ? <RetrieveChuck jokesList={jokesList} fetchJoke={this.fetchJoke} /> : "Loading..." }
        </div>
      </div>
    );
  }
};

export default App;
