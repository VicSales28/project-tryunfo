import React from 'react';

class Form extends React.Component {
  render() {
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
            />
          </label>

          <label htmlFor="attr2-input">
            2º atributo da carta:
            <input
              id="attr2-input"
              type="number"
              name="attr2-input"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            3º atributo da carta:
            <input
              id="attr3-input"
              type="number"
              name="attr3-input"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            Imagem:
            <input
              id="image-input"
              type="text"
              name="image-input"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select name="rare-input" id="rare-input" data-testid="rare-input">
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
            />
          </label>

          <button data-testid="save-button">Salvar</button>

        </fieldset>
      </form>
    );
  }
}

export default Form;
