import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
