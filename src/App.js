import React from 'react';

import Landing from './pages/Landing';

import './assets/styles/Global.css';
const dotenv = require('dotenv');
dotenv.config();
function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;