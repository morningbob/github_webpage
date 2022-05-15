


import { Fragment } from 'react';

import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <Fragment>
      <div className='App'>
        <Header />
        <Home />
        <Projects />
      </div>
    
    </Fragment>
  );
}

export default App;
