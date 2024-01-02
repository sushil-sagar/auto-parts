import React, { useState } from 'react';
import "./formPage.css";
import LeftSide from "./LeftSide";


const FormPage = () => {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        part: '',
        name: '',
        email: '',
        contact: '',
        message: '',
        zipCode: '',
    });

    const dummyYears = Array.from({ length: 74 }, (_, index) => 2023 - index); // Years from 1950 to 2023

    const dummyData = {
        'Brand A': {
            models: {
                'Model X1': ['Part 1A', 'Part 2A', 'Part 3A'],
                'Model X2': ['Part 1B', 'Part 2B', 'Part 3B'],
                'Model X3': ['Part 1C', 'Part 2C', 'Part 3C'],
            },
        },
        'Brand B': {
            models: {
                'Model Y1': ['Part 1D', 'Part 2D', 'Part 3D'],
                'Model Y2': ['Part 1E', 'Part 2E', 'Part 3E'],
                'Model Y3': ['Part 1F', 'Part 2F', 'Part 3F'],
            },
        },
        'Brand C': {
            models: {
                'Model Z1': ['Part 1G', 'Part 2G', 'Part 3G'],
                'Model Z2': ['Part 1H', 'Part 2H', 'Part 3H'],
                'Model Z3': ['Part 1I', 'Part 2I', 'Part 3I'],
            },
        },
    };

    const handleYearChange = (e) => {
        const selectedYear = e.target.value;
        setFormData({
            ...formData,
            year: selectedYear,
            make: '',
            model: '',
            part: '',
        });
    };

    const zipCodes = [
        '12345',
        '23456',
        '34567',
        // ... Other zip codes
    ];
    const handleMakeChange = (e) => {
        const selectedMake = e.target.value;
        setFormData({
            ...formData,
            make: selectedMake,
            model: '',
            part: '',
        });
    };

    const handleModelChange = (e) => {
        const selectedModel = e.target.value;
        setFormData({
            ...formData,
            model: selectedModel,
            part: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { year, make, model, part, name, email, contact, message, zipCode } = formData;


    return (
      
            <form className="form-container right-aligned">
            <h2>Get An Instant Free Quote!!!</h2>
            <div className="form-element">
                <div>
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year" value={year} onChange={handleYearChange}>
                        <option value="">Select a Year</option>
                        {dummyYears.map((yearOption, index) => (
                            <option key={index} value={yearOption}>
                                {yearOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="make">Make:</label>
                    <select name="make" id="make" value={make} onChange={handleMakeChange} disabled={!year}>
                        <option value="">Select a Make</option>
                        {Object.keys(dummyData).map((makeOption, index) => (
                            <option key={index} value={makeOption}>
                                {makeOption}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="model">Model:</label>
                    <select name="model" id="model" value={model} onChange={handleModelChange} disabled={!make}>
                        <option value="">Select a Model</option>
                        {make &&
                            Object.keys(dummyData[make]?.models || {}).map((modelOption, index) => (
                                <option key={index} value={modelOption}>
                                    {modelOption}
                                </option>
                            ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="part">Part:</label>
                    <select name="part" id="part" value={part} onChange={handleChange} disabled={!model}>
                        <option value="">Select a Part</option>
                        {model &&
                            dummyData[make]?.models[model]?.map((partOption, index) => (
                                <option key={index} value={partOption}>
                                    {partOption}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="contact">Contact:</label>
                    <input type="text" name="contact" id="contact" value={contact} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" value={message} onChange={handleChange} />
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <select name="zipCode" id="zipCode" value={zipCode} onChange={handleChange}>
                        <option value="">Select a Zip Code</option>
                        {zipCodes.map((zipCodeOption, index) => (
                            <option key={index} value={zipCodeOption}>
                                {zipCodeOption}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button className="form-element" type="submit">Find My Part Now</button>
        </form>
    );
};

export default FormPage; 
