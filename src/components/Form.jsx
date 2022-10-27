import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyInput from './Input';
import './styles/GeneralStyles.css';
import './styles/Form.css';

export default class Form extends Component {
  hasCardTrunfo = () => {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    if (!hasTrunfo) {
      return (
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
      );
    }
    return (
      <span>Você já tem um Super Trunfo em seu baralho</span>
    );
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      onSaveButtonClick,
      isSaveButtonDisabled,
      onInputChange,
    } = this.props;

    const maxAttr = 90;
    const minAttr = 0;

    return (
      <form action="" className="flex-column space-between-align-center form">
        <MyInput
          type="text"
          id="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          labelName="Nome"
          required
        />

        <MyInput
          type="textarea"
          id="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          labelName="Descrição"
          required
        />

        <MyInput
          type="number"
          id="attr1-input"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          labelName="Força"
          max={ maxAttr }
          min={ minAttr }
        />
        <MyInput
          type="number"
          id="attr2-input"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          labelName="Vida"
          max={ maxAttr }
          min={ minAttr }
        />
        <MyInput
          type="number"
          id="attr3-input"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          labelName="Mana"
          max={ maxAttr }
          min={ minAttr }
        />

        <MyInput
          type="url"
          id="image-input"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          labelName="Imagem"
          required
        />

        <label htmlFor="rarity">
          <span>Raridade</span>
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
        <div className="flex">
          { this.hasCardTrunfo() }
          <button
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </div>
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
