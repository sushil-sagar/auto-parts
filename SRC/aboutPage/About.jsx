import React from 'react';
import styles from './About.module.css';
import topImage from '../assets/bg17.webp'; // Import your top image
import movingImage from '../assets/aboutt1.png'; // Import your moving image

const AboutPage = () => {
  return (
    <div className={styles['about-page']}>
      <div className={styles['top-section']} style={{ backgroundImage: `url(${topImage})` }}>
        <div className={styles['content-center']}>
          {/* Content to be centered */}
          <h1 className={styles['centered-text']}>ALLOW US TO INTRODUCE OURSELVES</h1>
        </div>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles['content']}>
          <p>
            Quality Auto Salvage is dedicated to providing the highest quality recycled and used auto parts in the United States and Canada. We cooperate with the best junkyards and salvage yards around the country, to provide our customers with only top-notch services. We also provide unparalleled customer service, on-time delivery, and treat our clients with kindness, honesty, and respect.
          </p>
         
          <p>Repairing your vehicle can be a total bummer. It can be so daunting and confusing—not to mention expensive. With Quality Auto Salvage, you can find the best used parts for your vehicle at the lowest prices. If you're looking for the best auto parts at the lowest prices, you've come to the right place.</p>
          <p>Quality Auto Salvage offersan highly competent service to its purchasers, with excellent offers but with the best excellency and a large variety of inventory. We pride ourselves on providing our customers with a quality part as described with the highest level of customer service.</p>
          <p>Quality Auto Salvage is concerned with making it easy for you to purchase replacement parts for your car. We only deal with USED OEM Parts and OEM stands for Original Equipment Manufacturer, this means that you have the full guarantee that this part works as well as the parts of your vehicle that it replaces. We take full responsibility for logistics, so we can guarantee timely delivery, better and unified customer service and experience, and a high level of professionalism.</p>
          <p>The finest method to save hundreds of dollars on used parts for your automobile is by browsing through our website to find Used auto parts at an inevitable price and quality. You can economize a lot of money on the maintenance of your well-liked car by acquiring used parts with warranty.</p>
          <p>It is important that you buy only from providers that have a good reputation like ours, that will save you a lot of trouble. You will know that we are a reliable seller because of our knowledge of the USED parts market and the different brands that produce components for your vehicle.</p>
          <p>
            Our benefits will change the way you buy parts. Order with confidence!
            <a href="tel:+18887202716">+1 (888) 720-2716</a>
          </p>
        </div>
        <div className={styles['moving-image']}>
          <img src={movingImage} alt="Moving Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
