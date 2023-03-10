import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Card from './components/Card';
import SmallTitle from './components/SmallTitle';
import SavedCards from './components/SavedCards';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  onInputchange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  };

  validateSaveButton = () => {
    const { cardImage,
      cardName,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const minNumber = 0;
    const maxNumber = 90;
    const maxSumNumber = 210;

    if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || !cardAttr1
      || cardAttr1 > maxNumber
      || cardAttr1 < minNumber
      || !cardAttr2
      || cardAttr2 > maxNumber
      || cardAttr2 < minNumber
      || !cardAttr3
      || cardAttr3 > maxNumber
      || cardAttr3 < minNumber
      || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > maxSumNumber
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  deleteCard = (cardToRemove) => {
    const { savedCards } = this.state;
    if (cardToRemove.cardTrunfo) { this.setState({ hasTrunfo: false }); }
    const newSavedCards = savedCards
      .filter((card) => card.cardName !== cardToRemove.cardName);
    this.setState({ savedCards: [...newSavedCards] });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard], // Enviando o objeto para o final do array
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    }), this.checkHasTrunfo);
  };

  checkHasTrunfo = () => {
    const { savedCards } = this.state;
    if (savedCards.some((card) => card.cardTrunfo === true)) {
      return this.setState({
        hasTrunfo: true,
      });
    }
    return this.setState({
      hasTrunfo: false,
    });
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
      savedCards,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <Title />

        <main className="containers">

          <section className="container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputchange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>

          <section className="container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>

        </main>

        <SmallTitle />

        <SavedCards
          savedCards={ savedCards }
          deleteCard={ this.deleteCard }
        />

        <Footer />
      </>
    );
  }
}

export default App;
