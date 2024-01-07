// Transmission.jsx

import React from 'react';
import imageTopLeft from '../../assets/giphy1.gif'; // Import your top-left image
import rightImage from '../../assets/95.jpg'; // Import your right-side image
import gifImage from '../../assets/94.jpg'; // Import your gif image
import styles from './Transmission.module.css'; // Import your modular CSS file

const Transmission = () => {
  return (
    <div className={styles.transmissionContainer}>
      {/* Top Row */}
      <div className={styles.transmissionTopRow}>
        <img src={imageTopLeft} alt="Top Left" className={styles.transmissionTopLeftImage} />
        <div className={styles.transmissionTopRightContent}>
          <h1 className={styles.transmissionUsedEngines}>USED TRANSMISSIONS</h1>
          <button className={styles.transmissionInstantQuoteButton}>Get An Instant Quote</button>
        </div>
      </div>

      {/* Content Row */}
      <div className={styles.transmissionContentRow}>
        <div className={styles.transmissionLeftContent}>
          <h2>USED TRANSMISSION</h2>
          <p>
          Used Transmissions are an integral part of a car’s drivetrain. They are responsible for the movement of the gears and allow for a smooth transition from one gear to another. Transmission is usually made up of two parts: a torque converter and a set of gears. The torque converter takes power from the engine and converts it to rotational force, which then turns the gears that in turn spin your wheels.
           </p>
          <p>
          Transmissions can be manual or automatic, depending on how they function. Manual transmissions require more work on behalf of the driver, but they provide more control over how fast you accelerate and when you shift gears. Automatic transmissions are easier to use because they do all this for you, but they can also be problematic if something goes wrong with them because there’s no way to manually override them  </p>
          <p>Buying a used transmission is a good idea for those who are looking to save money. It is cheaper than buying a new one, and it is also good for the environment. It is important to know that there are some risks involved with buying a used transmission, so you should be careful about what you buy.

          </p>
          <p>There are numerous benefits of ordering a used transmission. One of the main benefits is that it will save you money, which can be very helpful if you have been struggling financially lately or if you have been spending more than you budgeted for on your car in general. Another benefit of buying a used transmission is that it will reduce the amount of waste created by manufacturing an entirely new part.

          </p>
          <p>When purchasing a used transmission, it is important to know the quality of the transmission. There are many factors that can affect the quality of a used transmission.

          </p>
          <p>One factor in determining the quality of a used transmission is the mileage on it. The higher the mileage on a used transmission, the more likely it will need to be replaced soon.

          </p>
          <p>
          Another factor in determining the quality of a used transmission is how well it was maintained. If someone took good care of their car and had regular oil changes and tune ups, then they are more likely to have a high-quality used transmission than someone who never did any work on their car at all.
          </p>
          <p>
Quality Auto Salvage takes pride in offering the most extensive inventory of pre-owned transmissions in the USA. Our commitment lies in delivering superior transmission units to our customers by meticulously testing and inspecting each auto part in our stock. We conduct thorough examinations to ensure that every transmission meets the highest quality standards before it reaches our customers.
</p>
           
If you are looking for a second hand or used transmission near your area but unable to find one which fits your budget and quality standards then your wait is over, JASK has thoroughly tested and inspected used auto parts ready to ship all over USA.
<p>
Warranty – All Transmissions Covered by standard 90-Day Warranty
</p><p>
Extensive Catalogue – JASK has an extensive catalogue of used transmission, you can easily find any used transmission compatible with your vehicle.

</p><p>
Customer Service – We have a vell well trained and experienced customer service executives. If you are having difficulty in finding used transmission for your vehicle or having any other issue, you can get in touch with our customer service department and they will surely solve your query and help you with whatever problem you are facing.
</p>
Low Mileage Transmissions – We provide high-quality transmission with low mileage, all are used transmissions are tested for Noise, Smoke and Compression in order to provide you with an only quality products.
        </div>
        </div>

      {/* Bottom Row */}
      <div className={styles.transmissionBottomRow}>
        <div className={styles.transmissionLeftContent}>
          <img src={gifImage} alt="Gif Image" className={styles.transmissionGifImage} />
        </div>
        <div className={styles.transmissionRightContent}>
          <h2>TYPES OF TRANSMISSION</h2>
          <h4>Automatic Transmission</h4>
          <p>
          An automatic transmission is a type of transmission that uses hydraulic or electric actuators to shift gears without any input from the driver. It provides convenience for drivers and reduces their workload, but it often makes them less aware or in control of their vehicle’s speed and acceleration.
           </p>
           <h4>
           Manual Transmission
           </h4>
           <p>
           A manual transmission is a type of transmission that uses a driver’s hands to change gears. It requires more effort from the driver than an automatic transmission but it provides better control over engine speed and acceleration.
           </p>
           <h4>
           Semi-Automatic Transmission Services


           </h4>
           <p>
           The driver shifts gears with either a manual or automatic mode. In manual mode, the driver must shift gears themselves. In automatic mode, the car will shift automatically for them at certain speeds.
           </p>
           <h4>Continuously Variable Transmission (CVT) Services</h4>
           <p>

CVT Services are a type of transmission that operates by continuously changing the gear ratio in response to the driving conditions. CVT has been around for over 100 years, but it has only recently been used in passenger cars and light trucks.</p>
        </div>
      </div>
      <div className={styles.bottomRow}>
                <div className={styles.leftContent}>
                    <img src={gifImage} alt="Gif Image" className={styles.gifImage} />
                </div>
                <div className={styles.rightContent}>
                    <h2>

                    BUY USED TRANSMISSION FROM US

                    </h2>
                    
                    <p>
                    At Quality Auto Salvage, our primary objective is to deliver top-notch used transmissions, ensuring unparalleled quality. We meticulously inspect every single auto part we offer for sale to ensure that each transmission meets rigorous standards before it is carefully packed and dispatched to our clients' specified locations.
                    </p>
                    
                   
                    <br />
                    <p>
                    We provide used transmissions for all brands of cars such as Ford transmission, GMC transmission, Toyota transmission, Honda transmission, BMW transmission, etc. Whatever make and model your car is, we have a transmission available for it. You may require an automatic transmission or manual transmission or any other type of transmission, we will provide you the used transmission you need at a very economical and affordable price.
                    </p>
                  
                </div>
            </div>
            <div>
              <h2>THINGS TO KEEP IN MIND BEFORE ORDERING A USED TRANSMISSION
Signs your transmission is damaged:</h2>
<p>
  1. Leaking Transmission fluid
</p>
<p>2. Burnt smell</p>
<p>3. Vehicle making unfamiliar noise</p>
<p>4. Difficulty in gear shifting</p>
<p>5. Loud transmission sound when</p>
<p>6. the vehicle is in neutral</p>
<p>7. Brown or burned looking transmission fluid</p>
<p>8. Transmission warning light on.</p>
<p>9. Slipping gears</p>
            </div>
    </div>
  );
};

export default Transmission;
