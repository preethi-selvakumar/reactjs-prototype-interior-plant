import React from 'react';

const FAQ = () => {
    const faqs = [
        "Where Should i Place My Indoor Plants ?",
        "How can i make my indoor plants grow fast ?",
        "How can i keep my plants bug free ?",
        "How often should i water my plants ?",
        "Do indoor plants purified air ?",
    ];

    return (
        <div className="faq-container">
            <h3 className="faq-title">FAQs</h3>
            {faqs.map((question, index) => (
                <div key={index} className="faq-item">
                    <span className="faq-question">{question}</span>
                    <span className="faq-arrow">&#9662;</span>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
