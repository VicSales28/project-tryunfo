import React, { Component } from 'react';

class SmallTitle extends Component {
  render() {
    return (
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title">
            Saved Cards
          </p>
          <p className="subtitle">
            All cards created
          </p>
        </div>
      </section>
    );
  }
}

export default SmallTitle;
