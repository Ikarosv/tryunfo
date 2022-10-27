import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Card extends Component {
  isSuperTrunfo = () => {
    const { cardTrunfo } = this.props;
    if (cardTrunfo) {
      return <h4 data-testid="trunfo-card">Super Trunfo</h4>;
    }
  };

  renderButton = () => {
    const { index, excludeFuncButton, cardTrunfo } = this.props;
    if (index >= 0) {
      return (
        <button
          type="button"
          onClick={ () => excludeFuncButton(index, cardTrunfo) }
          data-testid="delete-button"
        >
          Excluir
        </button>
      );
    }
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
    } = this.props;

    return (
      <section>
        <div>
          <h4 data-testid="name-card">{cardName}</h4>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p data-testid="description-card">{cardDescription}</p>
          <h5 data-testid="attr1-card">{cardAttr1}</h5>
          <h5 data-testid="attr2-card">{cardAttr2}</h5>
          <h5 data-testid="attr3-card">{cardAttr3}</h5>
          <span data-testid="rare-card">{cardRare}</span>
          {this.isSuperTrunfo()}
        </div>
        { this.renderButton() }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

Card.propTypes = {
  index: PropTypes.number,
  excludeFuncButton: PropTypes.func,
};

Card.defaultProps = {
  index: (0 - 1),
  excludeFuncButton: () => {},
};
