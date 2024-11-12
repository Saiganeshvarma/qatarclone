import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Ticket.css';

const Ticket = () => {
    const location = useLocation();
    const { selectedFlightDetails, ...passengerInfo } = location.state || {};

    const handleDownload = () => {
        const ticketContent = `
            Your Ticket
            Flight Information:
            Airline: ${selectedFlightDetails.airline}
            From: ${selectedFlightDetails.from}
            To: ${selectedFlightDetails.to}
            Departure: ${selectedFlightDetails.departureTime}
            Arrival: ${selectedFlightDetails.arrivalTime}
            Fare (Economy): ${selectedFlightDetails.fareEconomy}
            
            Passenger Information:
            Name: ${passengerInfo.name}
            Email: ${passengerInfo.email}
            Phone: ${passengerInfo.phone}
            DOB: ${passengerInfo.dob}
            Passport Number: ${passengerInfo.passportNumber}
            Nationality: ${passengerInfo.nationality}
        `;

        const blob = new Blob([ticketContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Ticket.txt';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="ticket-container">
            <h1>Your Ticket</h1>
            <div className="flight-details">
                <h2>Flight Information</h2>
                <p>Airline: {selectedFlightDetails.airline}</p>
                <p>From: {selectedFlightDetails.from}</p>
                <p>To: {selectedFlightDetails.to}</p>
                <p>Departure: {selectedFlightDetails.departureTime}</p>
                <p>Arrival: {selectedFlightDetails.arrivalTime}</p>
                <p>Fare (Economy): {selectedFlightDetails.fareEconomy}</p>
            </div>
            <div className="passenger-details">
                <h2>Passenger Information</h2>
                <p>Name: {passengerInfo.name}</p>
                <p>Email: {passengerInfo.email}</p>
                <p>Phone: {passengerInfo.phone}</p>
                <p>DOB: {passengerInfo.dob}</p>
                <p>Passport Number: {passengerInfo.passportNumber}</p>
                <p>Nationality: {passengerInfo.nationality}</p>
            </div>
            <button onClick={handleDownload} className="download-button">
                Download Ticket
            </button>
        </div>
    );
};

export default Ticket;
