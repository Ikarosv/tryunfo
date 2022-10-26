// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyInput from './Input';

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <MyInput type="text" id="name-input" name="Name" />
        <MyInput type="textarea" id="description-input" name="Description" />
        <MyInput type="number" id="attr1-input" name="Attr1" />
        <MyInput type="number" id="attr2-input" name="Attr2" />
        <MyInput type="number" id="attr3-input" name="Attr3" />
        <MyInput type="text" id="image-input" name="Image" />
        <label htmlFor="rarity">
          <span className="genericLabel">Raridade</span>
          <select name="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
