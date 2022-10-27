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
    cardTrunfo: '',
    isSaveButtonDisabled: true,
  };

  onInputChange = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    await this.setState({
      [name]: value,
    }, () => {
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
    });
  };

  isEmpty = (...props) => props.some((prop) => !prop.length);

  greaterThan = (maxV, minV, ...attrs) => (
    attrs.some((attr) => attr < minV || attr > maxV)
  );

  onSaveButtonClick = () => {
    // event.preventDefault();
    // console.log('a');
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
      isSaveButtonDisabled,
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
      </div>
    );
  }
}

export default App;
