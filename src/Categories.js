import React, { Component } from 'react';

const basePoint = 'https://api.chucknorris.io/jokes';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      jokesCategories: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount() {
    fetch(basePoint + '/categories')
      .then( response => response.json() )
      .then( data => this.setState({jokesCategories: data}) )
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);

    fetch(basePoint + '/random?category=' + name)
      .then( response => response.json() )
      .then( data => console.log(data.category + data.value) )
  }

  render(){
    return(
      <div>
        <button type="button" className="btn btn-warning btn-secondary">
            Clear categories!
          </button>
        <h3>Categories</h3>

        <div className="btngroup" data-toggle="buttons">
          {this.state.jokesCategories.map(category => {
            return (
              <div key={category}>
                <button className="btn btn-primary btn-block active" 
                  type="button"
                  name={category}
                  onClick={this.handleChange}
                  >
                  {category}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Categories;