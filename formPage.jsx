import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './formPage.css';

const FormPage = () => {
    const [formData, setFormData] = useState({
        year: '',
        makeModel: '', // Combined make and model selection
        part: '',
        name: '',
        email: '',
        contact: '',
        comments: '',
        zipCode: '',
        consent: false,
        captcha: '',
        state: '',
    });

    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const captchaRef = useRef(null);

    // Function to generate random captcha text
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';

        for (let i = 0; i < 5; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setCaptchaText(text);
    };

    // Function to handle user input
    const validateCaptcha = () => {
        if (userInput.toUpperCase() === captchaText.toUpperCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            alert('Captcha does not match. Please try again.');
            setUserInput('');
            generateCaptcha();
        }
    };

    // Function to handle user input
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
        if (e.target.value.toUpperCase() === captchaText.toUpperCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    // Initialize CAPTCHA text on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);



    const dummyYears = Array.from({ length: 74 }, (_, index) => 2024 - index); // Years from 1950 to 2023

    const dummyData = {
        'Brand A': {
            models: ['Model X1', 'Model X2', 'Model X3'],
        },
        'Brand B': {
            models: ['Model Y1', 'Model Y2', 'Model Y3'],
        },
        'Brand C': {
            models: ['Model Z1', 'Model Z2', 'Model Z3'],
        },
        // Add more brands and models
    };

    const dummyParts = ['Part 1', 'Part 2', 'Part 3']; // Common parts for all models



    const usStates = ['Alabama', 'Alaska', 'Arizona', /* ...all states */, 'Wyoming']; // List of US states

    const [showSubmit, setShowSubmit] = useState(false);

    const handleYearChange = (e) => {
        const selectedYear = e.target.value;
        setFormData({
            ...formData,
            year: selectedYear,
            makeModel: '',
            part: '',
        });
        setShowSubmit(false);
    };

    const handleMakeModelChange = (e) => {
        const selectedMakeModel = e.target.value;
        setFormData({
            ...formData,
            makeModel: selectedMakeModel,
            part: '',
        });
        setShowSubmit(false);
    };

    const handleChange = (name, value) => {
        let updatedValue = value;

        if (name === 'zipCode' && value.length > 5) {
            updatedValue = value.slice(0, 5); // Limit to 5 characters
        }

        setFormData({
            ...formData,
            [name]: updatedValue,
        });

        setShowSubmit(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or any necessary action here
        // This function will be called when the form is submitted
    };

    const isFormIncomplete = !(
        formData.year &&
        formData.makeModel &&
        formData.part &&
        formData.name &&
        formData.email &&
        formData.contact &&
        formData.zipCode.length === 5 &&
        formData.state
    );

    return (
        <form className="form-container right-aligned" onSubmit={handleSubmit}>
            <h2>Get An Instant Free Quote!!!</h2>
            <div className="form-element">
                <div>
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year" value={formData.year} onChange={handleYearChange}>
                        <option value="">Select a Year</option>
                        {dummyYears.map((yearOption, index) => (
                            <option key={index} value={yearOption}>
                                {yearOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="makeModel">Make & Model:</label>
                    <select
                        name="makeModel"
                        id="makeModel"
                        value={formData.makeModel}
                        onChange={handleMakeModelChange}
                        disabled={!formData.year}
                    >
                        <option value="">Select a Make & Model</option>
                        {Object.keys(dummyData).map((brand, index) => (
                            dummyData[brand].models.map((model) => (
                                <option key={`${brand}-${model}`} value={`${brand}-${model}`}>
                                    {`${brand} - ${model}`}
                                </option>
                            ))
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="part">Part:</label>
                    <select
                        name="part"
                        id="part"
                        value={formData.part}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        disabled={!formData.makeModel}
                    >
                        <option value="">Select a Part</option>
                        {dummyParts.map((partOption, index) => (
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
                    <input type="text" name="name" id="name" value={formData.name} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="contact">Contact:</label>
                    <div className="contact-input">
                        <PhoneInput
                            country="us"
                            inputProps={{
                                name: 'contact',
                                id: 'contact',
                                required: true,
                                autoFocus: true,
                            }}
                            value={formData.contact}
                            onChange={(value) => handleChange('contact', value)}
                        />
                    </div>

                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={5}
                        pattern="[0-9]*"
                    />


                </div>

            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="state">State:</label>
                    <select name="state" id="state" value={formData.state} onChange={(e) => handleChange(e.target.name, e.target.value)}>
                        <option value="">Select a State</option>
                        {usStates.map((stateOption, index) => (
                            <option key={index} value={stateOption}>
                                {stateOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea name="comments" id="comments" value={formData.comments} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
            </div>


            <div className="form-element">
                <div className="captcha-section">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        placeholder="Enter captcha here"
                        ref={captchaRef}
                    />

                    <div className="captcha-code">
                        <p>{captchaText}</p>
                    </div>

                    {isCorrect && <p>Captcha matched!</p>}
                </div>
                <div className="consent-section">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent">
                        I Consent To Contact, Send Me SMS &
                        <a href="/terms-and-condition" target="_blank" rel="noopener noreferrer">
                            Terms & Conditions
                        </a>
                    </label>
                </div>
            </div>
            <button className="form-element" type="submit" style={isFormIncomplete ? { display: 'none' } : {}}>
                Find My Part Now
            </button>
        </form>
    );
};

export default FormPage;
