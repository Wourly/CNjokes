import React, { Component } from 'react';

class RetrieveChuck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesList: [],
    }

    this.fetchJoke = this.fetchJoke.bind(this);
  }
  
  componentWillMount() {
    this.fetchJoke();
  }

  fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
  }
    
  render(){
    const { jokesList } = this.state;
    console.log(jokesList);
    if(jokesList.length === 0){
      return <h3>Loading...</h3>
    }
    //console.log( jokesList.map(item => item.category) );
    return(
      <div>
        <button type="button" className="btn btn-danger" onClick={this.fetchJoke}>
          Give me another one!
        </button>

        <h3>Chuck Jokes</h3>

        <div className="list-group">
          {jokesList.map(item => {
            return(
              <div key={item.id} className="list-group-item">
                {item.category ? <strong>"{item.category}:" </strong> : <strong>"Random:"</strong>} {item.value}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default RetrieveChuck;