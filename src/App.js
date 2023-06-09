import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './components/styles/GeneralStyles.css';
import './components/styles/App.css';
import InputFilter from './components/InputFilter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCarts: [],
    inputFilter: '',
    filteredCards: [],
    filterRare: 'todas',
    trunfoFilter: false,
  };

  activateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const isInputsEmpty = this.isEmpty(cardName, cardDescription, cardImage);

    const maxTotalSum = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const allAttr = this.greaterThan(maxAttr, minAttr, cardAttr1, cardAttr2, cardAttr3);

    const totalSum = +cardAttr1 + +cardAttr2 + +cardAttr3 > maxTotalSum;

    const isSaveButtonDisabled = allAttr || totalSum || isInputsEmpty;
    this.setState({ isSaveButtonDisabled });
  };

  excludeFuncButton = (index, cardTrunfo) => {
    const { savedCarts } = this.state;
    const newArr = savedCarts;
    newArr.splice(index, 1);
    this.setState({ savedCarts: newArr, hasTrunfo: !cardTrunfo });
  };

  onInputChange = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    await this.setState({
      [name]: value,
    }, this.activateButton);
  };

  isEmpty = (...props) => props.some((prop) => !prop.length);

  greaterThan = (maxV, minV, ...attrs) => (
    attrs.some((attr) => attr < minV || attr > maxV)
  );

  onSaveButtonClick = () => {
    this.setState(({
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, savedCarts,
    }) => ({
      savedCarts: [...savedCarts, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      hasTrunfo: savedCarts.some((card) => card.cardTrunfo) || cardTrunfo,
    }), this.activateButton);
  };

  filterCards = ({ target }) => {
    const { savedCarts } = this.state;
    this.setState({
      inputFilter: target.value,
      filteredCards: savedCarts.filter((card) => card.cardName.includes(target.value)),
    });
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, savedCarts,
      inputFilter, filteredCards, filterRare, trunfoFilter,
    } = this.state;

    const defaultProps = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    let cardsRender = inputFilter.length ? filteredCards : savedCarts;
    cardsRender = filterRare === 'todas' ? cardsRender : (
      cardsRender.filter((card) => card.cardRare === filterRare));
    cardsRender = trunfoFilter
      ? savedCarts.filter((card) => card.cardTrunfo) : cardsRender;
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="container form-preview">
          <section className="addNewCard">
            <h2>Adicione uma nova carta</h2>
            <Form
              { ...defaultProps }
              onSaveButtonClick={ this.onSaveButtonClick }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
            />
          </section>
          <section style={ { textAlign: 'center' } }>
            <h2>Pré-visualização</h2>
            <Card { ...defaultProps } />
          </section>
        </section>
        <section>
          <h4>Todas as cartas</h4>
          <section>
            <InputFilter
              type="text"
              value={ inputFilter }
              name="inputFilter"
              onChange={ this.filterCards }
              testId="name-filter"
              id="name-filter"
              disabled={ trunfoFilter }
            />

            <InputFilter
              type="select"
              value={ filterRare }
              name="filterRare"
              onChange={ this.onInputChange }
              testId="rare-filter"
              disabled={ trunfoFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </InputFilter>

            <InputFilter
              type="checkbox"
              name="trunfoFilter"
              id="trunfoFilter"
              labelname="Super Trunfo"
              testId="trunfo-filter"
              onChange={ this.onInputChange }
              checked={ trunfoFilter }
            />
          </section>
          <section className="flex-wrap fullCards">
            {
              cardsRender.map((infoCard, index) => (
                <Card
                  key={ infoCard.cardName + index }
                  { ...infoCard }
                  index={ index }
                  excludeFuncButton={ this.excludeFuncButton }
                  className="deckCard"
                />
              ))
            }
          </section>
        </section>
      </div>
    );
  }
}

export default App;
