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
      // hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <fieldset>

          <legend>Adicione nova carta</legend>

          <label htmlFor="name-input">
            Nome  da carta:
            <input
              id="name-input"
              type="text"
              name="name-input"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              maxLength="20"
              required
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <textarea
              id="description-input"
              type="textarea"
              name="description-input"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              maxLength="80"
              required
              rows="5"
              cols="25"
            />
          </label>

          <label htmlFor="attr1-input">
            1º atributo da carta:
            <input
              id="attr1-input"
              type="number"
              name="attr1-input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            2º atributo da carta:
            <input
              id="attr2-input"
              type="number"
              name="attr2-input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            3º atributo da carta:
            <input
              id="attr3-input"
              type="number"
              name="attr3-input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            Imagem:
            <input
              id="image-input"
              type="text"
              name="image-input"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select
              name="rare-input"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input
              id="trunfo-input"
              type="checkbox"
              name="trunfo-input"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
