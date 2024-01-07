// CustomerServicePage.jsx

import React from 'react';
import CustomerServiceImage from '../assets/bg17.webp'; // Replace with your image path
import CallIcon from '../assets/1.png'; // Replace with your call icon path
import PhoneImage from '../assets/qap-customer-service.jpg'; // Replace with your phone image path
import styles from './CustomerServicePage.module.css'; // Import the CSS module

const CustomerServicePage = () => {
  const handleCall = () => {
    // Replace this URL with the action for making a call
    window.location.href = 'tel:+18887202716';
  };

  return (
    <div className={styles['customer-service-container']}>
      <div className={styles['top-section']}>
        <img src={CustomerServiceImage} alt="Customer Service" className={styles['image-top']} style={{ height: '30vh' }} />
        <h1 className={styles['image-text']}>CUSTOMER SERVICE</h1>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles['content-left']}>
          <p>
            We have a dedicated team of customer service agents available to assist you with your order. Due to the personal attention we provide each customer, we staff this department to be available to you throughout the day.
          </p>
          <p>
            <strong>Hours of operation are:</strong>
            <br />
            Monday to Friday - 8:00am to 8:00pm EST 
            <br />
            Saturday - 8:00am to 5:00pm EST
          </p>
          <p>
            You can reach us directly by dialing{' '}
            <a href="tel:+18887202716" onClick={handleCall}>
              +1 (888) 720-2716
            </a>
          </p>
        </div>
        <div className={styles['content-right']}>
          <img src={PhoneImage} alt="Phone Image" className={`${styles['phone-image']} ${styles['content-right-smaller']}`} />
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
