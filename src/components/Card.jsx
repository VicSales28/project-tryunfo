import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (

      <section className="card">

        <h1 data-testid="name-card" className="title is-size-4 name-card">{cardName}</h1>

        <div className="image-card">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>

        <div className="description-card">
          <p data-testid="description-card">{cardDescription}</p>
        </div>

        <div className="skills-card-container">
          <div className="skills-display">
            <p className="skill-item" data-testid="attr1-card">
              Attack:
              {' '}
              {cardAttr1}
            </p>
            <p className="skill-item" data-testid="attr2-card">
              Defense:
              {' '}
              {cardAttr2}
            </p>
            <p className="skill-item" data-testid="attr3-card">
              Speed:
              {' '}
              {cardAttr3}
            </p>
          </div>
        </div>

        <span data-testid="rare-card" className="rare-card">{cardRare}</span>

        <div>
          {cardTrunfo
          && <span data-testid="trunfo-card" className="trunfo">Super Trunfo</span>}
        </div>

      </section>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
