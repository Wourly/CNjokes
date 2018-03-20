import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesCategories: [],
    }
  }
  
  componentWillMount() {
    const { basePoint } = this.props;

    fetch( basePoint + '/categories' )
      .then( response => response.json() )
      .then( data => this.setState({jokesCategories: data}) )
  }

  render(){
    const { jokesCategories } = this.state;
    return(
      <div>
        <h3>Categories</h3>

        <div>
          {jokesCategories.map(category => {
            return (
              <div key={category}>
                <button className="btn btn-primary btn-block active"
                  type="button"
                  name={category}
                  onClick={this.props.handleClick}
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

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
  basePoint: PropTypes.string.isRequired,
};

export default Categories;