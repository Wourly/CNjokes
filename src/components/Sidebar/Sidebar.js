import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

class Sidebar extends Component {
  render() {
    const {counterValue,incrementCounter, decrementCounter, fetchAmountOfJokes } = this.props;
    return (
      <div className="sidebar">
        <Categories handleClick={this.props.handleClick}/>
        <Button 
          counterValue={counterValue}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          fetchAmountOfJokes={fetchAmountOfJokes}
        />
      </div>
    );
  };
}

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  counterValue: PropTypes.number,
  incrementCounter: PropTypes.any,
  decrementCounter: PropTypes.any,
  fetchAmountOfJokes: PropTypes.any,
};

export default Sidebar;
