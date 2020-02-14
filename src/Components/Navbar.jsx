import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <h1 class="navbar-brand">
            Convert Anything
          </h1>
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
              <p class="nav-link dropdown-toggle" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Convert to</p>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <p class="dropdown-item" >Currency Converter</p>
                <p class="dropdown-item" >Percentage Converter</p>
              </div>
            </li>
              <li class="nav-item">
                <p class="nav-link">
                 About
                </p>
              </li>
              <li class="nav-item">
                <p class="nav-link">
                  Contact
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

