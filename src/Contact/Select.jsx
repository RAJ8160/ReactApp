// Select.js
import React, { useState } from 'react';
import './Select.css'; // Import your CSS file for styling

const Select = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
            <div className="selected-option">
                {selectedOption ? (
                    <>
                        <img src={selectedOption.img} alt={selectedOption.label} className="option-img" />
                        {selectedOption.label}
                    </>
                ) : (
                    "Select a language"
                )}
            </div>
            {isOpen && (
                <div className="options">
                    {options.map(option => (
                        <div 
                            key={option.value} 
                            className="option" 
                            onClick={() => handleOptionClick(option)}
                        >
                            <img src={option.img} alt={option.label} className="option-img" />
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
