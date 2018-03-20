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
      numberrOfJokesToDisplay: 1,
    }

    this.fetchJoke = this.fetchJoke.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchJoke(){
    fetch( basePoint + '/random')
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
  }
  
  handleClick(event) {
    const { numberrOfJokesToDisplay } = this.state;
    const target = event.target;
    const name = target.name;

    for ( let i = 0; i < numberrOfJokesToDisplay; i++) {
      fetch( basePoint + '/random?category=' + name)
        .then( response => response.json() )
        .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) )
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({ numberrOfJokesToDisplay: value});
  }
  
  render(){
    const { jokesList, numberrOfJokesToDisplay } = this.state;
    
    return (
      <div>
        <div className="jumbotron text-centered">
          <h1>The CHUCKINATOR 5000</h1>
        </div>
        <div className="col col-md-1 btn-group-vertical">
          <input type="number" min="1" className="form-control" value={numberrOfJokesToDisplay} onChange={this.handleChange} />
          <Categories handleClick={this.handleClick} basePoint={basePoint}/>
        </div>
        <div className="col col-md-11">
          { jokesList ? <RetrieveChuck jokesList={jokesList} fetchJoke={this.fetchJoke} /> : "Loading..." }
        </div>
      </div>
    );
  }
};

export default App;
