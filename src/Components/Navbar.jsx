import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <Link class="navbar-brand" to="/">
            Convert Anything
          </Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Converters</Link>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <Link class="dropdown-item nav-active bg-warning" to="/">Currency Converter</Link>
          <Link class="dropdown-item" to="/">Percentage Converter</Link>
        </div>
      </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                 About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

