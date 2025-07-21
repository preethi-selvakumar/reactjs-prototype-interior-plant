import React, { createContext, useContext, useState, useEffect } from 'react';

// Product Images
import plant1 from "../assets/images/bamboo.webp";

import plant9 from "../assets/images/oyster.webp";
import plant10 from "../assets/images/jade-plant.jpg";
import plant11 from "../assets/images/peacock-plant.webp";
import plant12 from "../assets/images/peperomia.webp";
import plant13 from "../assets/images/philiyodendro.webp";
import plant14 from "../assets/images/syngo.webp";
import plant15 from "../assets/images/fidal.webp";
import plant16 from "../assets/images/aralia.webp";

import mustHaveLogo from "../assets/images/main-logo.png";
import monthlyMustHaveIllustration from "../assets/images/monthly-must-have-illustration.png";

// Create Context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const sessionTimeoutMinutes = 15;

    // Mobile Menu Toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Filters
    const [filters, setFilters] = useState({
        price: "",
        size: "",
        sunlight: "",
        water: "",
    });

    const updateFilter = (type, value) => {
        setFilters((prev) => ({ ...prev, [type]: value }));
    };

    // LOGIN STATE with auto-expiry
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedLogin = localStorage.getItem("isLoggedIn");
        const loginTime = localStorage.getItem("loginTime");

        if (storedLogin === "true" && loginTime) {
            const now = new Date().getTime();
            const timeDiffMinutes = (now - parseInt(loginTime)) / (1000 * 60);
            if (timeDiffMinutes > sessionTimeoutMinutes) {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("loginTime");
                return false;
            }
            return true;
        }

        return false;
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginTime", new Date().getTime().toString());
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loginTime");
    };

    useEffect(() => {
        if (!isLoggedIn && localStorage.getItem("loginTime")) {
            alert("Session expired. Please log in again.");
            localStorage.removeItem("loginTime");
        }
    }, [isLoggedIn]);

    // Cart State (with lazy load from localStorage)
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingIndex = cartItems.findIndex(item => item.name === product.name);
        if (existingIndex !== -1) {
            const updated = [...cartItems];
            updated[existingIndex].qty = (updated[existingIndex].qty || 1) + 1;
            setCartItems(updated);
        } else {
            setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
        }
        alert(`${product.name} added to cart successfully`);
    };

    const increaseQty = (index) => {
        const updated = [...cartItems];
        updated[index].qty = (updated[index].qty || 1) + 1;
        setCartItems(updated);
    };

    const decreaseQty = (index) => {
        const updated = [...cartItems];
        if ((updated[index].qty || 1) > 1) {
            updated[index].qty -= 1;
            setCartItems(updated);
        }
    };

    const removeFromCart = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        setCartItems(updated);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    const cartCount = cartItems.reduce((total, item) => total + (item.qty || 1), 0);

    // Product Data
    const firstPlantData = {
        img: plant1,
        name: "Lucky Bonsai Plant",
        price: "₹290",
        rating: 4.5,
        offer: "35% OFF",
    };

    const mustHavePlantsData = [
        { img: plant9, name: "Oyster Plant", price: "Rs.190", rating: 4.8, offer: "50% OFF" },
        { img: plant10, name: "Lucky Jade Plant", price: "Rs.290", rating: 4.8, offer: "35% OFF" },
        { img: plant11, name: "Peacock Plant", price: "Rs.720", rating: 4.8, offer: "25% OFF" },
        { img: plant12, name: "Peperomia Plant", price: "Rs.390", rating: 4.8, offer: "30% OFF" },
    ];

    const monthlyMustHavePlantsData = [
        { img: plant13, name: "Philodendron Plant", price: "Rs.290", rating: 4.8, offer: "35% OFF" },
        { img: plant14, name: "Syngonium Plant", price: "Rs.690", rating: 4.8, offer: "25% OFF" },
        { img: plant15, name: "Fidal Fig Plant", price: "Rs.450", rating: 4.8, offer: "35% OFF" },
        { img: plant16, name: "Aralia Plant", price: "Rs.190", rating: 4.8, offer: "30% OFF" },
    ];

    return (
        <AppContext.Provider
            value={{
                // UI
                isMenuOpen,
                toggleMenu,

                // Filters
                filters,
                updateFilter,

                // Product Data
                firstPlantData,
                mustHavePlantsData,
                mustHaveLogo,
                monthlyMustHavePlantsData,
                monthlyMustHaveIllustration,

                // Cart
                cartItems,
                setCartItems,
                addToCart,
                cartCount,
                isCartOpen,
                setIsCartOpen,
                increaseQty,
                decreaseQty,
                removeFromCart,
                clearCart,

                // Auth
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
