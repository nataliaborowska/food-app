import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar} from './modules/Navbar';
import styles from './App.module.scss';

const App: React.SFC = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
      </div>
    </Router>
  )
}

export default App;
