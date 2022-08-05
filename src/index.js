import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config';
import { AuthProvider } from './modules/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // If you have the StrictMode enabled, it will fire two times the useEffect on development mode 
  //to make sure that you are aware of the possible side-effects that could appear.
/* <React.StrictMode> */
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
 /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
