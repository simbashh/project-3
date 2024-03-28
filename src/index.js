import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import {Counter} from './App';
// import Form from './App';
import Product from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Counter/> */}
    {/* <Form/> */}
    <Product />
  </React.StrictMode>
);

