import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RetrieveChuck extends Component {
  
  componentWillMount() {
    this.props.fetchJoke();
  }
    
  render(){
    const { jokesList, fetchJoke } = this.props; 
    
    return(
      <div>
        <button type="button" className="btn btn-danger" onClick={fetchJoke}>
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

RetrieveChuck.propTypes = {
  fetchJoke: PropTypes.func.isRequired,
  jokesList: PropTypes.array.isRequired,
};

export default RetrieveChuck;