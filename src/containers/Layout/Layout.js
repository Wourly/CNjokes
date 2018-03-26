import React, { Component } from "react";

import "./layout.css";

import apiBaseURL from '../../components/apiBaseURL'
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokesList: [],
      numberOfJokes: 1
    }
    
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.fetchRandomJoke = this.fetchRandomJoke.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchAmountOfJokes = this.fetchAmountOfJokes.bind(this);
    }

    componentDidMount() {
      const { jokesList } = this.state;
      this.setState({ jokesList });

      this.fetchRandomJoke();
    }
  
    incrementHandler() {
      this.setState(prevState => ({numberOfJokes: ++prevState.numberOfJokes}))
      console.log(this.state.numberOfJokes)
    };
  
    decrementHandler() {
      this.setState(prevState => ({numberOfJokes: --prevState.numberOfJokes}))
      console.log(this.state.numberOfJokes)
    };

    deleteLastJoke() {
      let reducedJokeList = this.state.jokesList.slice(1);
      this.setState({jokesList: reducedJokeList})
    }

    fetchRandomJoke() {
    
      fetch(`${apiBaseURL}/random`)
        .then(response => response.json())
        .then(data => this.setState({
          jokesList: [data, ...this.state.jokesList]
        }));
    }

    fetchAmountOfJokes() {
      const { numberOfJokes } = this.state;

      for(let i = 0; i < numberOfJokes; i++) {
        this.fetchRandomJoke();
      }
    }

    handleClick(event) {
      const { name } = event.target;
  
      fetch(`${apiBaseURL}/random?category=${name}`)
        .then(response => response.json())
        .then(data => this.setState({jokesList: [data]}));
    }

  render() {
    const {numberOfJokes, jokesList} = this.state;
    return (
      <div>
        <Header />
        <div className="content">
        <Sidebar
          handleClick={this.handleClick} 
          counterValue={numberOfJokes}
          incrementCounter={this.incrementHandler}
          decrementCounter={this.decrementHandler}
          fetchAmountOfJokes={this.fetchAmountOfJokes}/>
        <Jokes 
          jokeList={jokesList}/>

        </div>
      </div>
    );
  }
}

export default Layout;
