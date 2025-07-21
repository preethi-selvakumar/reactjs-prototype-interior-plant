import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

import plant1 from "../assets/images/agloanima-md.webp";
import plant2 from "../assets/images/areca-md.jpg";

import Checkout from '../components/Checkout';

const Cart = () => {
    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart,
        isLoggedIn,
    } = useAppContext();

    const navigate = useNavigate();
    const [showCheckoutOverlay, setShowCheckoutOverlay] = useState(false);

    const getDiscount = (price, offer) => {
        const discountPercent = parseInt(offer?.replace('% OFF', '')) || 0;
        const numericPrice = parseInt(price?.replace(/\D/g, '')) || 0;
        return Math.floor((discountPercent / 100) * numericPrice);
    };

    const getTotalSavings = () => {
        return cartItems.reduce((total, item) => {
            const discount = getDiscount(item.price, item.offer);
            return total + (discount * (item.qty || 1));
        }, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseInt(item.price?.replace(/\D/g, '')) || 0;
            return total + (price * (item.qty || 1));
        }, 0);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) return;

        if (!isLoggedIn) {
            alert("Please login to continue with checkout.");
            localStorage.setItem('checkoutIntent', 'true');
            navigate('/login');
            return;
        }

        const confirmed = window.confirm("Proceed to Payment?");
        if (confirmed) {
            setShowCheckoutOverlay(true);
        }
    };

    // Show alert after login if user had checkout intent
    useEffect(() => {
        const hasIntent = localStorage.getItem('checkoutIntent') === 'true';

        if (isLoggedIn && hasIntent && cartItems.length > 0) {
            alert("Proceed to Payment");
            localStorage.removeItem('checkoutIntent');
        }
    }, [isLoggedIn, cartItems]);

    return (
        <div className="cart-page">
            {/* Header */}
            <div className="cart-header">
                <h2>Shopping Cart ({cartItems.length})</h2>
                <button className="cart-close-btn" onClick={() => navigate('/')}>×</button>
            </div>

            <button className="discount-btn">Apply Discount At the Check Out</button>

            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your Cart Is currently Empty</p>
                    <button className="no-savings-btn">No Savings on this order</button>
                    <Link to="/">
                        <button className="continue-btn">Continue Browsing</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-filled">
                    {cartItems.map((item, idx) => {
                        const unitPrice = parseInt(item.price?.replace(/\D/g, '')) || 0;
                        const itemTotal = unitPrice * (item.qty || 1);
                        return (
                            <div className="cart-item" key={idx}>
                                <img src={item.img} alt={item.name} className="cart-img" />
                                <div className="cart-info">
                                    <h4>{item.name}</h4>
                                    <p className="unit-price">Unit Price: {item.price}</p>
                                    <p className="item-total">Total: ₹{itemTotal}</p>

                                    <div className="qty-controls">
                                        <button onClick={() => decreaseQty(idx)} className="qty-btn">-</button>
                                        <span className="qty-value">{item.qty || 1}</span>
                                        <button onClick={() => increaseQty(idx)} className="qty-btn">+</button>
                                    </div>

                                    <button className="remove-btn" onClick={() => removeFromCart(idx)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    <div className="savings-banner">
                        You Have Saved Rs.{getTotalSavings()} this order
                    </div>

                    <div className="cart-total">
                        <h3>Total Price: ₹{getTotalPrice()}</h3>
                    </div>
                </div>
            )}

            {/* Recommended Section */}
            <div className="recommended-section">
                <h3>Recommended Product</h3>
                <div className="recommended-list">
                    <div className="recommended-item">
                        <img src={plant1} alt="Aglaonema Ice Plant" />
                        <h5>Aglaonema Ice Plant with Self Watering Plant</h5>
                        <p>₹250</p>
                    </div>

                    <div className="recommended-item">
                        <img src={plant2} alt="Areca Palm" />
                        <h5>Areca Plant with Self Watering Plant</h5>
                        <p>₹580</p>
                    </div>
                </div>
            </div>

            {/* Guarantee & Checkout */}
            <p className="guarantee-msg">
                Damage in Transit Guarantee Replacement at no extra cost
            </p>

            {cartItems.length > 0 && (
                <div className="checkout-wrapper">
                    <button className="checkout-btn" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            )}

            {/* Checkout Modal Overlay */}
            {showCheckoutOverlay && (
                <Checkout
                    totalAmount={getTotalPrice()}
                    onClose={() => setShowCheckoutOverlay(false)}
                />
            )}
        </div>
    );
};

export default Cart;
