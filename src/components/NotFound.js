// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    const from = this.props.from || "Router";
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!<br /> From: {from}</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
