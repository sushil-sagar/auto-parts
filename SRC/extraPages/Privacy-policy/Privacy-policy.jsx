// YourPrivacyPolicyComponent.jsx

import React from 'react';
import privacyPolicyImage from '../../assets/privacy.webp'; // Path to your privacy policy image
import styles from './Privacy-policy.module.css';

const YourPrivacyPolicyComponent = () => {
    return (
        <div>
            {/* Header */}
            <div className={styles.header}>
                <img src={privacyPolicyImage} alt="Privacy Policy" />
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1>Privacy Policy </h1>
                <p>
                    Quality Auto Salvage certifies that your information is safe and secure when making transactions over the Internet. </p>
                <p>
                    Through this Internet Privacy Statement, we want to reassure users of the Site that we will not sell, share, or rent user information to others in a manner different than as set forth in this Internet Privacy Statement.</p>
                <p>
                    We use a credit card processing company to bill purchasers of goods from the Site, and we also use outside distributors and delivery companies to assist us in fulfilling and delivering orders. We share with them only the information necessary to enable such card processing and fulfillment and delivery of goods. Our users' personal information will not be shared, sold, or rented to any organization outside of Quality Auto Salvage and our financial and order fulfillment affiliates. Quality Auto Salvage occasionally sends our customers and users of the Site announcements and updates, containing important information which we believe will be of value to them.
                </p>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
}

export default YourPrivacyPolicyComponent;
