// PartListPage.jsx

import React from 'react';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/4.png';
import Image4 from '../assets/5.png';
import Image5 from '../assets/6.png';
import Image6 from '../assets/7.png';
import Image7 from '../assets/8.png';
import styles from './PartListPage.module.css';

const PartListPage = () => {
  return (
    <div className={styles['part-list-container']}>
      <div className={styles['top-content']}>
        <h1 style={{ color: 'white' }}>Car Part </h1>
      </div>
      <div className={styles['bottom-content']}>
        <div className={styles['image-row-small']}>
          <img src={Image1} alt="Image 1" className={styles['small-image']} />
          <img src={Image2} alt="Image 2" className={styles['small-image']} />
          <img src={Image3} alt="Image 3" className={styles['small-image']} />
          <img src={Image4} alt="Image 4" className={styles['small-image']} />
          <img src={Image5} alt="Image 5" className={styles['small-image']} />
          <img src={Image6} alt="Image 6" className={styles['small-image']} />
          <img src={Image7} alt="Image 7" className={styles['small-image']} />
        </div>
        
      </div>
    </div>
  );
};

export default PartListPage;
