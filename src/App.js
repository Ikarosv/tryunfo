import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCarts: [],
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

    const totalSum = (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)) > maxTotalSum;

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
      hasTrunfo,
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
      hasTrunfo: cardTrunfo && !hasTrunfo,
    }), this.activateButton);
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
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCarts,
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

    return (
      <div>
        <h1>Tryunfo</h1>
        <section>
          <Form
            { ...defaultProps }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
          />
          <Card { ...defaultProps } />
        </section>
        <section>
          {
            savedCarts.map((infoCard, index) => (
              <Card
                key={ infoCard.cardName + index }
                { ...infoCard }
                index={ index }
                excludeFuncButton={ this.excludeFuncButton }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
