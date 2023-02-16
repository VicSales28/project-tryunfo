import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class SavedCards extends Component {
  render() {
    const { savedCards, deleteCard } = this.props;

    return (
      <section className="saved-cards-container">

        { savedCards.map((card) => (
          <div key={ `${card.cardName}` }>
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <br />
            <button
              type="button"
              data-testid="delete-button"
              className="button is-danger is-active"
              onClick={ () => deleteCard(card) }
            >
              Apagar carta
            </button>
          </div>
        ))}
      </section>
    );
  }
}

SavedCards.propTypes = {
  savedCards: PropTypes.arrayOf.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default SavedCards;
