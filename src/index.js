import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home';
import Search from './Component/Search';
import Results from './Component/FlightResults';
import PassengerDetails from './Component/PassengerDetails';
import PaymentGateway from './Component/PaymentGateway';
import Ticket from './Component/Ticket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><Search /></>} />
        <Route path="/results" element={<Results />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
