import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

import upiIcon from "../assets/images/upi-icon.png";
import gpayIcon from "../assets/images/gpay-icon.png";
import tickIcon from "../assets/images/tick-icon.png";

const Checkout = ({ totalAmount, onClose }) => {
    const [paymentSelected, setPaymentSelected] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);

    const { clearCart } = useAppContext(); // Use clearCart only after payment

    const handlePaymentMethod = (mode) => {
        alert(`Payment method selected: ${mode}`);
        setPaymentSelected(true);
    };

    const handleFinalPayment = () => {
        alert("Payment Successful");
        setPaymentDone(true);
        clearCart(); // Clear only now
    };

    return (
        <div className="checkout-overlay">
            <div className="checkout-modal">
                <button className="checkout-close-btn" onClick={onClose}>×</button>

                {paymentDone ? (
                    <>
                        <h2>Payment Successful</h2>
                        <img src={tickIcon} alt="Success" style={{ width: "80px", margin: "20px auto" }} />
                        <h3>Thanks For Choosing Us</h3>
                        <p style={{ color: "#666" }}>
                            Your Order Has Been Placed Successfully.<br />
                            It will be delivered in correct estimated time.
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Payment Due</h2>
                        <hr className="divider" />

                        <div className="summary-row">
                            <span>Summary of Payment:</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        <h3 className="payment-heading">Payment Options</h3>

                        <button className="payment-btn" onClick={() => handlePaymentMethod("UPI")}>
                            <img src={upiIcon} alt="UPI" />
                            <span>UPI</span>
                            <span className="amount-right">₹{totalAmount} &gt;</span>
                        </button>

                        <button className="payment-btn" onClick={() => handlePaymentMethod("GPay")}>
                            <img src={gpayIcon} alt="GPay" />
                            <span>GPay</span>
                            <span className="amount-right">₹{totalAmount} &gt;</span>
                        </button>

                        {paymentSelected && (
                            <button className="make-payment-btn" onClick={handleFinalPayment}>
                                Make Payment
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Checkout;
