import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import RetrieveChuck from './RetrieveChuck';
import Categories from './Categories';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCategories: [],
      jokeRequest: false,
    }
  }
  
  render(){
    //const { jokesList, jokesCategories } = this.state;
    return (
      <div>
        <div className="jumbotron text-centered">
          <h1>The CHUCKINATOR 5000</h1>
        </div>
        <div className="col col-md-1 btn-group-vertical">
          <Categories />
        </div>
        <div className="col col-md-10">
          <RetrieveChuck />
        </div>
      </div>
    );
  }
};

export default App;
