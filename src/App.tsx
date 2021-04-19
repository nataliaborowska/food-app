import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar} from './modules/Navbar';
import {Dishes} from './modules/Dishes';
import {Drinks} from './modules/Drinks';
import {ErrorBoundary} from './common/ErrorBoundary';
import {Home} from './modules/Home';
import styles from './App.module.scss';

const App: React.SFC = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <ErrorBoundary><Route path="/" exact component={Home} /></ErrorBoundary>
        <ErrorBoundary><Route path="/dishes" exact component={Dishes} /></ErrorBoundary>
        <ErrorBoundary><Route path="/drinks" exact component={Drinks} /></ErrorBoundary>
      </div>
    </Router>
  )
}

export default App;
