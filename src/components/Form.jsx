import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form-main">

        <h2 className="title is-4" id="title">Add new card:</h2>

        <div className="field">
          <label htmlFor="cardName" className="label">
            Name:
            <div className="control">
              <input
                id="cardName"
                type="text"
                name="cardName"
                data-testid="name-input"
                className="input"
                placeholder="Type your character's name"
                value={ cardName }
                onChange={ onInputChange }
                maxLength="40"
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="cardDescription" className="label">
            Description:
            <div className="control">
              <textarea
                id="cardDescription"
                type="textarea"
                name="cardDescription"
                data-testid="description-input"
                className="textarea"
                placeholder="Describe the character's abilities"
                value={ cardDescription }
                onChange={ onInputChange }
                maxLength="80"
                rows="3"
                cols="25"
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="cardAttr1" className="label">
            Attack:
            <div className="control">
              <input
                id="cardAttr1"
                type="number"
                name="cardAttr1"
                data-testid="attr1-input"
                className="input is-small"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="cardAttr2" className="label">
            Defense:
            <div className="control">
              <input
                id="cardAttr2"
                type="number"
                name="cardAttr2"
                data-testid="attr2-input"
                className="input is-small"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="cardAttr3" className="label">
            Speed:
            <div className="control">
              <input
                id="cardAttr3"
                type="number"
                name="cardAttr3"
                data-testid="attr3-input"
                className="input is-small"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label htmlFor="cardImage" className="label">
            Image:
            <div className="control">
              <input
                id="cardImage"
                type="text"
                name="cardImage"
                data-testid="image-input"
                className="input"
                placeholder="Type URL"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="select">
          <select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option selected>Select rarity</option>
            <option value="Regular ⭐">Regular</option>
            <option value="Rare ⭐⭐">Rare</option>
            <option value="Very rare ⭐⭐⭐">Very rare</option>
          </select>
        </div>

        <div className="field">
          {
            hasTrunfo
              ? <div className="info">You already have a Super Trunfo in your deck.</div>
              : (
                <div className="field info">
                  <div className="control">
                    <label htmlFor="cardTrunfo" className="label">
                      Super Trunfo:
                      {' '}
                      <input
                        id="cardTrunfo"
                        type="checkbox"
                        name="cardTrunfo"
                        data-testid="trunfo-input"
                        className="checkbox"
                        checked={ cardTrunfo }
                        onChange={ onInputChange }
                      />
                    </label>
                  </div>
                </div>)
          }
        </div>

        <div className="field-save-button">
          <div className="control">
            <button
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
              className="button is-primary"
            >
              Save
            </button>
          </div>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
