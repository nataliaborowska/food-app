import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar: React.FC = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/dishes'>Dishes</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)