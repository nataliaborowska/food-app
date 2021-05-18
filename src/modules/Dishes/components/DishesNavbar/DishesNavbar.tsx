import React from 'react';
import {Link} from 'react-router-dom';

export const DishesNavbar: React.FC = (props) => (
  <nav className="navbar navbar-expand-md">
    <div className="container-fluid">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/dishes">Dishes list</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/dishes/add'>Add new dish</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);