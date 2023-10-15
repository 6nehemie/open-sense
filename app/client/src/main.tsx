import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { STRIPE_PUBLISHABLE_KEY } from './utils/config.ts';
import './index.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const loadStripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Elements stripe={loadStripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
