import React, { useState, useEffect, useRef } from 'react';
import styles from './PlaceOrder.module.css';

const PlaceOrder = () => {
    const handleReview = () => {
        const reviewData = {
            // Collect and prepare the data to display for review
            // e.g., Billing details, shipping details, vehicle details, payment information, etc.
            // Example data for demonstration purpose:
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            // Include other form field values here
        };
        // Display or handle the reviewData accordingly
        console.log('Review Data:', reviewData);
    };

    // Functionality for Save button
    const handleSave = () => {
        const savedData = {
            // Collect and prepare the data to save for future reference or sharing
            // e.g., All the form data
            // Example data for demonstration purpose:
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            // Include other form field values here
        };
        // Store or handle the savedData accordingly
        console.log('Saved Data:', savedData);
    };

    // Functionality for Submit button
    const handleSubmit = () => {
        const submittedData = {
            // Collect and prepare the data to submit to the database
            // e.g., All the form data along with payment details
            // Example data for demonstration purpose:
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            // Include other form field values here
        };
        // Submit the data to the database and send to the customer's email
        console.log('Submitted Data:', submittedData);
        // Show a success message or perform other actions after submission
    };

    const [captchaText, setCaptchaText] = useState(''); // State to hold captcha text
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
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    // Function to validate user input
    const validateCaptcha = () => {
        if (userInput === captchaText) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            alert('Captcha does not match. Please try again.');
            setUserInput('');
            generateCaptcha();
        }
    };

    // Initialize CAPTCHA text on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);


    const canvasRef = useRef(null);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [partPrice, setPartPrice] = useState(0);

    // Function to calculate the total amount
    const calculateTotalAmount = () => {
        return shippingCharges + partPrice;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const startDrawing = (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        };

        const draw = (e) => {
            if (!isDrawing) return;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);
        };
    }, [canvasRef]);

    const years = [];
    for (let year = 1950; year <= 2024; year++) {
        years.push(year);
    }

    const makeAndModels = [
        { make: 'Make 1', models: ['Model A', 'Model B', 'Model C'] },
        { make: 'Make 2', models: ['Model X', 'Model Y', 'Model Z'] },
        // Add more make and models as needed
    ];
    const parts = [
        'Part 1',
        'Part 2',
        'Part 3',
        // Add more parts as needed
    ];

    // PayPal payment integration
    const handlePayPalPayment = () => {
        // Here, you can implement the PayPal payment functionality using the calculated total amount
        // This could involve redirecting the user to PayPal or making a request to the PayPal API

        // For example:
        // Redirect the user to the PayPal checkout page with the total amount
        window.location.href = `https://www.paypal.com/checkout?amount=${calculateTotalAmount()}`;
    };
    return (
        <div className={styles['order-container']}>

            <div className={styles['order-form']}>
                <div className={styles['logo']}>
                    {/* Logo image here */}
                    <img src="logo.png" alt="Brand Logo" />
                </div>
                <div className={styles['order-details']}>
                    <h2 className={styles['order-title']}>Place An Order Form</h2>
                    {/* Your order form inputs go here */}
                </div>
            </div>
            <div className={styles['billing-shipping']}>
                <h3>Billing & Shipping Details</h3>
                <hr className={styles['bottom-border']} />

                <p className={styles['info']}>
                    Please, make sure you provide the correct information for processing of your order.
                </p>

                <form className={styles['billing-form']}>
                    <div className={styles['billing-name']}>
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required />
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>

                    <div className={styles['billing-address']}>
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text" id="streetAddress" name="streetAddress" />
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input type="text" id="addressLine2" name="addressLine2" />
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" />
                        <label htmlFor="state">State/Region/Province</label>
                        <input type="text" id="state" name="state" />
                        <label htmlFor="postalCode">Postal / Zip Code (5 digits)</label>
                        <input type="text" id="postalCode" name="postalCode" pattern="[0-9]{5}" />
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" />
                    </div>


                    <div id="phone" className={styles['billing-name']}>
                        <label htmlFor="phone">Phone *</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>

                    <div id="email" className={styles['billing-name']}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles['shipping-names']}>
                        <label htmlFor="shippingName">Shipping Name</label>
                        <div>
                            <input type="text" id="shippingFirstName" name="shippingFirstName" placeholder="First Name" />
                            <input type="text" id="shippingLastName" name="shippingLastName" placeholder="Last Name" />
                        </div>
                        <p>Please, fill this field if billing & shipping names are different</p>
                    </div>
                    <div className={styles['business-name']}>
                        <label htmlFor="businessName">Business Name</label>
                        <input type="text" id="businessName" name="businessName" />
                    </div>
                    <div className={styles['shipping-address']}>
                        <h3>Shipping Address</h3>
                        <label htmlFor="shippingStreetAddress">Street Address</label>
                        <input type="text" id="shippingStreetAddress" name="shippingStreetAddress" />
                        <label htmlFor="shippingAddressLine2">Address Line 2</label>
                        <input type="text" id="shippingAddressLine2" name="shippingAddressLine2" />
                        <label htmlFor="shippingCity">City</label>
                        <input type="text" id="shippingCity" name="shippingCity" />
                        <label htmlFor="shippingState">State/Region/Province</label>
                        <input type="text" id="shippingState" name="shippingState" />
                        <label htmlFor="shippingPostalCode">Postal / Zip Code</label>
                        <input type="text" id="shippingPostalCode" name="shippingPostalCode" />
                        <label htmlFor="shippingCountry">Country</label>
                        <input type="text" id="shippingCountry" name="shippingCountry" />
                        <p>Please, fill if Shipping & Billing addresses are different.</p>
                    </div>
                    <div className={styles['shipping-phone']}>
                        <h3>Shipping Phone</h3>
                        <label htmlFor="shippingPhoneNumber">
                            Country Code +1
                            <input type="tel" id="shippingPhoneNumber" name="shippingPhoneNumber" />
                        </label>
                    </div>
                </form>


                <div className={styles['vehicle-details']}>
                    <h3>Vehicle Details</h3>
                    <hr className={styles['underline']} />
                    {/* Vehicle details content goes here */}
                </div>

                {/* Additional Form Sections */}
                <div className={styles['additional-sections']}>
                    <div className={styles['year-section']}>
                        <label htmlFor="year">Year *</label>
                        <select id="year" name="year" required>
                            <option value="" disabled selected>
                                Select a year between 1950 and 2024
                            </option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles['make-model-section']}>
                        <label htmlFor="makeModel">Make & Model *</label>
                        <select id="makeModel" name="makeModel" required>
                            <option value="" disabled selected>
                                Select Make & Model
                            </option>
                            {makeAndModels.map((item, index) => (
                                <optgroup key={index} label={item.make}>
                                    {item.models.map((model) => (
                                        <option key={`${item.make}-${model}`} value={`${item.make}-${model}`}>
                                            {item.make} - {model}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <div className={styles['parts-section']}>
                        <label htmlFor="parts">Parts *</label>
                        <select id="parts" name="parts" required>
                            <option value="" disabled selected>
                                Select Parts
                            </option>
                            {parts.map((part, index) => (
                                <option key={index} value={part}>
                                    {part}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles['comments-section']}>
                        <label htmlFor="comments">Comments</label>
                        <textarea id="comments" name="comments" rows="4" placeholder="Enter your comments here"></textarea>
                    </div>

                    <div className={styles['payment-section']}>
                        <h3>Payment</h3>
                        {/* Add input fields or select elements for payment information */}
                        <div className={styles['part-price-section']}>
                            <label htmlFor="partPrice">Part Price *</label>
                            <input
                                type="number"
                                id="partPrice"
                                name="partPrice"
                                placeholder="Enter the part price as finalized with sales executive"
                                value={partPrice}
                                onChange={(e) => setPartPrice(parseInt(e.target.value))}
                            />
                            {/* ... Other content for this section */}
                        </div>
                    </div>
                    <div className={styles['charges-section']}>
                        <label htmlFor="miscCharges">Shipping, Taxes, Insurance & Misc. Charges *</label>
                        <input
                            type="number"
                            id="miscCharges"
                            name="miscCharges"
                            placeholder="Enter the charges as finalized with sales executive"
                            value={shippingCharges}
                            onChange={(e) => setShippingCharges(parseInt(e.target.value))}
                        />
                        {/* ... Other content for this section */}
                    </div>

                    {/* Part Price section */}


                    {/* Total Amount section */}
                    <div className={styles['total-amount-section']}>
                        <h3>Total Amount</h3>
                        <p>Total: ${calculateTotalAmount()}</p>
                    </div>
                    <div className={styles['terms-section']}>
                        <h3>Terms and Conditions *</h3>
                        <p>
                            Customer understands that this purchase is for recycled/used or salvage auto parts to be delivered within 7-10 business days from the date of payment. At times, there might be inordinate delays due to bad weather, poor part condition, or limited availability. The part may or may not carry a replacement warranty, as mentioned by the sales executive, from the date of its delivery. If the part the customer receives is externally/cosmetically damaged, they should inform us within 24-48 hours of receiving it. If the received part is incorrect, defective, or internally damaged, please provide a diagnostic report from a certified mechanic and return the part to us within 7 days. Any special requests not mentioned in this document will not be fulfilled. Refunds will only be issued if a replacement cannot be made. Labor or consequential costs, including shipping, are not warrantied to be paid by Jask Auto Parts Inc. or refunded. Unneeded or erroneously ordered parts are subject to a minimum of a 25% restocking fee, and no freight refund is applicable. Warranties are non-transferable. All disputes will be between Jask Auto Parts Inc. and the payment maker/cardholder. The customer forfeits all rights to dispute these charges with their credit/debit card company; shipping & handling, taxes, etc., are non-refundable. The customer acknowledges that this order is placed via the website, and all entered data is correct and binding. Refusing the shipment will result in freight charges being billed to the customer's credit card. Tampering, disassembly, or modification to the part(s) without written authorization from the seller will void all warranties. If a return is necessary, contact the salesperson or customer service of Jask Auto Parts Inc. Jask Auto Parts Inc. reserves the right to arrange all returns. If the customer fails to return the part as agreed, Jask Auto Parts Inc. will arrange pickup and charge their credit card for return freight charges. For detailed warranty & shipping policies, refer to Jask Auto Parts' website. Visit http://www.jaskautoparts.com/ for more information.
                        </p>
                        <label htmlFor="acceptTerms">
                            <input type="checkbox" id="acceptTerms" name="acceptTerms" required />
                            I accept the Terms and Conditions.
                        </label>
                    </div>

                    <div className={styles['signature-section']}>
                        <h3>Signature *</h3>
                        <p>E-Signature</p>
                        <canvas
                            ref={canvasRef}
                            className={styles['signature-canvas']}
                            width="400"
                            height="200"
                            style={{ border: '1px solid #000' }}
                        ></canvas>
                        <button
                            onClick={() =>
                                canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
                            }
                            className={styles['signature-clear-button']}
                        >
                            Clear
                        </button>
                    </div>

                    <div className={styles['payment-section']}>
                        <h3>Credit/Debit Card / PayPal Payment *</h3>
                        <p>PayPal Checkout USD</p>



                        {/* Amount to be paid */}
                        <div className={styles['amount-section']}>
                            <h4 className={styles['amount-label']}>Amount to be paid</h4>
                            <p className={styles['amount-value']}>${calculateTotalAmount()}</p>
                            {/* PayPal button */}
                            <a href={`https://www.paypal.com/checkout?amount=${calculateTotalAmount()}`} className={styles['paypal-button']}>
                                Pay with PayPal
                            </a>
                        </div>
                    </div>



                    <div className={styles['captcha-section']}>
                        <h3>Type in the box | Please note it's Case Sensitive *</h3>
                        <p>Enter the text in the box below</p>
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleUserInput}
                            placeholder="Enter captcha here"
                            className={styles['captcha-input']}
                            ref={captchaRef}
                        />

                        {isCorrect && <p>Captcha matched!</p>}
                        <div className={styles['captcha-code']}>
                            <p>{captchaText}</p>
                        </div>

                        <button onClick={validateCaptcha} className={styles['captcha-button']}>
                            Please wait
                        </button>
                    </div>
                    <div className={styles['bottom-buttons-section']}>
                        <div className={styles['action-button-column']}>
                            <button onClick={handleReview} className={styles['action-button']}>
                                Review
                            </button>
                        </div>
                        <div className={styles['action-button-column']}>
                            <button onClick={handleSave} className={styles['action-button']}>
                                Save
                            </button>
                        </div>
                        <div className={styles['action-button-column']}>
                            <button onClick={handleSubmit} className={styles['action-button']}>
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
