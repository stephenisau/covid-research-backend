import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// library imports
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// component imports
import Routes from './Routes/Routes';
import Home from './components/Home'
// style imports
import './App.scss';

// const stripePromise = loadStripe()

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        {/* <Routes /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
