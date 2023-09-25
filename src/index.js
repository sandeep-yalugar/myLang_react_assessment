import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="300578239751-5853vedcmnbu2ahc93cal532k65meond.apps.googleusercontent.com">
  
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </GoogleOAuthProvider>
  </React.StrictMode>
);

