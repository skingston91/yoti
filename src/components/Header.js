import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data/people/1">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>;

export default Header;
