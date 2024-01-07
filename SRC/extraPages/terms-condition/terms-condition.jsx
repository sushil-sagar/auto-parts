// TermsAndConditions.js

import React from 'react';
import styles from './terms-condition.module.css';

const TermsAndConditions = () => {
    const phoneNumber = "+1 (888) 720-2716";
  
    const handlePhoneClick = () => {
      window.location.href = 'tel:' + phoneNumber.replace(/ /g, '');
    };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.content}>
      Please read these Terms and Conditions carefully before using the https://qualtityautosalvages.com/ website operated by Quality Auto Salvages LLC.
      </p>
      <p className={styles.content}>
      Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
      </p>
      <p className={styles.content}>
      By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
      </p>
      <h6 className={`${styles.content} ${styles.blackBoldText}`}>
        Links To Other Web Sites
      </h6>
      <p className={styles.content}>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Quality Auto Salvages LLC.
      </p>
      <p className={styles.content}>
      Quality Auto Salvages LLC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that
      </p>
      <p className={styles.content}>
      Quality Auto Salvages LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>
      <p className={styles.content}>
      We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
      </p>
      <h6 className={`${styles.content} ${styles.blackBoldText}`}>
      Termination
        </h6>
        <p className={styles.content}>
        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p className={styles.content}>
        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
            
                <h6 className={`${styles.content} ${styles.blackBoldText}`}>
                Governing Law
        </h6>
        <p className={styles.content}>
        These Trms shall be governed and construed in accordance with the laws of United States of America, without regard to its conflict of law provisions.
        </p>
        <p className={styles.content}>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>
        <h6 className={`${styles.content} ${styles.blackBoldText}`}>
        Changes
        </h6>
        <p className={styles.content}>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p className={styles.content}>
        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
        <p className={styles.content}>
        Contact Us{' '}
        <a
          className={styles.boldText}
          href={`tel:${phoneNumber.replace(/ /g, '')}`}
          onClick={handlePhoneClick}
        >
          <span>{phoneNumber}</span>
        </a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
