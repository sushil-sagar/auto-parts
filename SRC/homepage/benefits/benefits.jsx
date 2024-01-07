import React from 'react';
import styles from './benefitsPage.module.css';

import FaTruckIcon from "../../assets/delivery.png";
import FaLockIcon from "../../assets/quality.png";
import FaHeartbeatIcon from "../../assets/reliability.png";
import FaUndoAltIcon from "../../assets/returns.png";
import FaGemIcon from "../../assets/security.png";
import FaShieldAltIcon from '../../assets/warranty.png';

const BenefitsPage = () => {
  const icons = [FaTruckIcon, FaLockIcon, FaHeartbeatIcon, FaUndoAltIcon, FaGemIcon, FaShieldAltIcon];
  const titles = ['Fast Delivery', 'Secure Transactions', 'Reliability', 'Easy Returns', 'Quality Parts', 'Warranty'];
  const descriptions = [
    'Get your parts delivered quickly with our fast shipping options.',
    'Shop securely with encrypted transactions and data protection.',
    'Trust our reliable parts to keep your vehicle running smoothly.',
    'Hassle-free returns if the part doesn\'t meet your expectations.',
    'We offer top-quality parts that undergo strict quality checks.',
    'Our parts come with a warranty to ensure your satisfaction.'
  ];

  return (
    <div className={styles.pageContainer} style={{ background: 'grey' }}>
      <h1 style={{ color: 'white' }}>Our Benefits Will Change The Way You Buy Parts. Order With Confidence!</h1>
      <div className={styles.row}>
        {titles.map((title, index) => (
          <div className="col-md-4" key={index}>
            <div className={styles.benefitCard} style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <img src={icons[index]} alt={title} className={styles.icon} /> {/* Use <img> tag to display the image */}
              <h2>{title}</h2>
              <p>{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
