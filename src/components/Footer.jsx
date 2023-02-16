import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Project Tryunfo</strong>
            {' '}
            by
            {' '}
            <a href="https://github.com/VicSales28">Victoria Sales</a>
            . This project was developed during my time studying React at
            <a href="https://www.betrybe.com/"> Trybe Programming School</a>
            .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
