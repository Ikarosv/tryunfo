import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyInput from './Input';

export default class Form extends Component {
  // renderButton = () => {
  //   const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
  //   if (isSaveButtonDisabled) {
  //     return (
  //       <button
  //         type="button"
  //         data-testid="save-button"
  //         name="isSaveButtonDisabled"
  //         onClick={ onSaveButtonClick }
  //         disabled
  //       >
  //         Salvar
  //       </button>
  //     );
  //   }
  //   return (
  //     <button
  //       type="button"
  //       data-testid="save-button"
  //       name="isSaveButtonDisabled"
  //       onClick={ onSaveButtonClick }
  //     >
  //       Salvar
  //     </button>
  //   );
  // };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onSaveButtonClick,
      isSaveButtonDisabled,
      onInputChange,
    } = this.props;
    return (
      <form action="">
        <MyInput
          type="text"
          id="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          required
        />

        <MyInput
          type="textarea"
          id="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          required
        />

        <MyInput
          type="number"
          id="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          max={ 90 }
          min={ 1 }
        />
        <MyInput
          type="number"
          id="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          max={ 90 }
          min={ 1 }
        />
        <MyInput
          type="number"
          id="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          max={ 90 }
          min={ 1 }
        />

        <MyInput
          type="text"
          id="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          required
        />

        <label htmlFor="rarity">
          <span className="genericLabel">Raridade</span>
          <select
            id="rarity"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            required
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
