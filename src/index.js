import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import './Assets/Main.css'
import '../src/index.css'
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);