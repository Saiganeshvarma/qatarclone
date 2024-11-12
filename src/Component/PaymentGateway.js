import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/PaymentGateway.css';

const PaymentGateway = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedFlightDetails, ...passengerInfo } = location.state || {};
    
    // State for credit card form inputs
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handlePayment = (e) => {
        e.preventDefault();
        
        // Simulate payment processing
        setTimeout(() => {
            navigate('/ticket', { state: { selectedFlightDetails, ...passengerInfo } });
        }, 1000); // Delay for demonstration
    };

    return (
        <div className="payment-gateway">
            <h2>Payment Gateway</h2>
            <p>Please complete your payment to confirm the booking.</p>
            <form onSubmit={handlePayment} className="payment-form">
                <div className="form-group">
                    <label>Cardholder Name:</label>
                    <input
                        type="text"
                        name="cardholderName"
                        value={cardDetails.cardholderName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                    />
                </div>
                <div className="form-group">
                    <label>Card Number:</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength="16"
                    />
                </div>
                <div className="form-group">
                    <label>Expiry Date:</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleChange}
                        required
                        placeholder="MM/YY"
                        maxLength="5"
                    />
                </div>
                <div className="form-group">
                    <label>CVV:</label>
                    <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleChange}
                        required
                        placeholder="123"
                        maxLength="3"
                    />
                </div>
                <button type="submit" className="pay-button">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentGateway;
