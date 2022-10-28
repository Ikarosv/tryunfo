import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles/Input.css';

export default class MyInput extends Component {
  render() {
    const { id, name, type, value, onChange, required, max, min, labelname } = this.props;
    const defaultProps = {
      id,
      name,
      type,
      value,
      onChange,
      required,
      max,
      min,
      labelname,
    };

    return (
      <label htmlFor={ id } className="inputLabel flex-column">
        {
          type === 'textarea' ? <textarea
            { ...defaultProps }
            placeholder={ labelname }
            data-testid={ id }
            className="defaultInput inputTextarea noResize"
            rows={ 4 }
          /> : <input
            className="defaultInput inputText"
            placeholder={ labelname }
            data-testid={ id }
            { ...defaultProps }
          />
        }
        <div className="parentDiv">
          <span className="genericLabel">{labelname}</span>
        </div>
      </label>
    );
  }
}

MyInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelname: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
};

MyInput.defaultProps = {
  onChange: () => {},
  required: false,
  max: 90,
  min: 0,
};
