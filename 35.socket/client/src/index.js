import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameState from './contexts/name/state';
import Login from './components/Login'
ReactDOM.render(
  <React.StrictMode>
    <NameState>
    {/* <App /> */}
    <Login />
    </NameState>
  </React.StrictMode>,
  document.getElementById('root')
);


