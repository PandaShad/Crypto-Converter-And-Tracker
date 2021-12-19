import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CryptoTrackerApp from './CryptoTrackerApp';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Tracker" element={<CryptoTrackerApp />}/>
    </Routes>
    {/* <React.StrictMode> */}
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById('root')
);
