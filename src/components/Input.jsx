import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MyInput extends Component {
  render() {
    const { id, name, type } = this.props;
    return (
      <label htmlFor={ id }>
        <span className="genericLabel">{name}</span>
        <input
          type={ type }
          id={ id }
          data-testid={ id }
          name={ name }
        />
      </label>
    );
  }
}

MyInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
