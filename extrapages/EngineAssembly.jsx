// EngineAssembly.jsx

import React from 'react';
import imageTopLeft from '../../assets/giphy.webp'; // Import your top-left image
import rightImage from '../../assets/99.jpg'; // Import your right-side image
import gifImage from '../../assets/98.gif'; // Import your gif image
import styles from './EngineAssembly.module.css'; // Import your modular CSS file
import rightImage1 from '../../assets/97.jpg'; // Import your right-side image
import Imagetwo from '../../assets/96.jpg'; // Import your gif image

const EngineAssembly = () => {
    return (
        <div className={styles.engineContainer}>
            {/* Top Row */}
            <div className={styles.topRow}>
                <img src={imageTopLeft} alt="Top Left" className={styles.topLeftImage} />
                <div className={styles.topRightContent}>
                    <h1 className={styles.usedEngines}>USED ENGINES</h1>
                    <button className={styles.instantQuoteButton}>Get An Instant Quote</button>
                </div>
            </div>

            {/* Content Row */}
            <div className={styles.contentRow}>
                <div className={styles.leftContent}>
                    <h2>USED ENGINE</h2>
                    <p>
                        The engine is the lifeline of any vehicle, and due to continuous use, its performance can decline, leading to various complications. When experiencing trouble with your vehicle, having your engine checked and replaced as soon as possible with a new or used engine can be crucial.
                    </p>
                    <p>At Salvage Auto Parts, we pride ourselves on being reliable and experienced dealers of second-hand OEM auto parts. We specialize in offering top-tier, A-grade used engines, each carrying a 100% warranty, ensuring quality assurance for every auto part we sell. We understand the significance of original auto parts and aim to meet our customers' confidence and trust by providing verified and first-class OEM auto parts.
                    </p>
                </div>
                <div className={styles.rightContent}>
                    <img src={rightImage} alt="Right Image" className={styles.rightImage} />
                </div>
            </div>

            {/* Bottom Row */}
            <div className={styles.bottomRow}>
                <div className={styles.leftContent}>
                    <img src={gifImage} alt="Gif Image" className={styles.gifImage} />
                </div>
                <div className={styles.rightContent}>
                    <h2>WHAT IS ENGINE?</h2>
                    <p>
                        Engines play a crucial role in vehicles, converting fuel into energy that propels the car. While engines vary in shapes and sizes, most operate by burning fuel to produce heat, which converts water into steam. This steam then powers a turbine, which rotates a shaft, enabling the car to move forward. Engines are diverse in design yet share the fundamental function of harnessing energy from fuel to facilitate vehicle motion.
                    </p>
                    <p>
                        An engine is a mechanical device that transforms fuel energy into motion. Within vehicles, engines harness the chemical energy present in gasoline, diesel, or natural gas to drive a turbine, initiating the movement of a piston within a cylinder. The piston reciprocates, expelling air from the cylinder. This expelled air further propels the turbine, subsequently continuing the process by pushing another piston located in a separate cylinder, perpetuating the cycle.
                    </p>
                    <p>
                        Engines serve as the vital component in a vehicle, supplying the power necessary for its movement. They can be fueled by various sources such as gasoline, diesel, natural gas, or alternative fuels. Engines find application in a wide array of vehicles, encompassing cars, buses, trains, and boats among others.
                    </p>
                    <p>
                        The internal combustion engine, a prevalent form of heat engine, is widely utilized across various applications including automobiles and boats. Typically situated at the front of a vehicle, although sometimes positioned at the rear, these engines commonly rely on fuels such as gasoline, diesel, or ethanol to operate.
                    </p>
                    <p>
                        An engine functions as a mechanism transforming the energy derived from fuel into motion. In vehicles, these engines harness the chemical energy present in gasoline, diesel, or natural gas to initiate a sequence of actions. Initially, the energy from the fuel drives a turbine, setting it into rotation. Consequently, this rotational movement propels a piston housed within a cylinder, which reciprocates, expelling air from the cylinder. The air's expulsion, in turn, powers the turbine once more, initiating the cycle anew by pushing another piston positioned inside an additional cylinder, and the process continues iteratively.
                    </p>
                </div>
            </div>


            <div className={styles.contentRow}>
                <div className={styles.leftContent}>
                    <h2>Purchase your used engine from us today!</h2>
                    <p>

                        Salvage Auto Parts is dedicated to delivering top-quality used engines. We meticulously examine each auto part we offer, ensuring that every salvage engine meets stringent standards of performance and reliability before being dispatched to our clients' specified locations.
                    </p>
                    <p>
                        We offer a comprehensive range of used engines compatible with various car brands, including Honda, GMC, Ford, BMW, and more. Irrespective of your vehicle's make and model, we have a ready-to-ship inventory of used engines available to suit your specific requirements.
                    </p>
                </div>
                <div className={styles.rightContent}>
                    <img src={rightImage1} alt="Right Image" className={styles.rightImage} />
                </div>
            </div>

            <div className={styles.lastBottomRow}>
                <div className={styles.leftContents}>
                    <img src={Imagetwo} alt="Gif Image" className={styles.gifImage} />
                </div>
                <div className={styles.rightContents}>
                    <h2>Consider these points before ordering a used engine.</h2>
                    <p>
                        Before ordering a used engine, it's essential to consider several factors. Ensure the engine's compatibility with your vehicle, check its mileage, condition, and service history. Look for warranty options, inspect the engine, and verify the seller's reputation to make an informed decision and avoid potential issues.
                    </p>
                    <h4>Pick an authorized seller</h4>
                    <p>
                        Buying a used engine is a significant investment, and although it's more affordable than a new one, it's still a considerable expense. To ensure a reliable purchase and avoid future issues, it's crucial to buy a used engine from an authorized and reputable seller.
                    </p>
                </div>
            </div>
            <h2>History and Mileage</h2>
            <p>Among the critical aspects to weigh before purchasing a pre-owned engine is its mileage. Mileage significantly influences the engine's performance and overall condition. Additionally, examining the engine's age, location, warranty terms, and pricing are essential factors. Generally, the older the engine, the higher the risk of potential breakdowns.</p>
            <p>
            Prior to making any purchase, requesting images of the engine is advised. Photos provide visual evidence and help identify potential issues or flaws that might be present within the engine.
            </p>
            <h2>
            Check For Warranty
            </h2>
            <p>
            It's crucial to inquire about the warranty provided by the seller and thoroughly understand the terms and conditions. At our establishment, we offer a comprehensive warranty with every used engine and various other auto parts we sell. Our warranty aims to provide assurance and support to customers, ensuring their satisfaction and confidence in the purchased products.
            </p>
            <h2>Has it been Tested?</h2>
            <p>
            Prior to ordering a used engine or any other OEM auto part, it's advisable to verify if the product has undergone testing. Opting for a tested used engine can significantly mitigate potential future issues and eliminate unnecessary expenses.
            </p>
            <p>
            Furthermore, while considering a replacement engine, ensure its compatibility with your vehicle. Though it may not precisely match your previous engine, it's imperative to confirm that it fits your vehicle's specifications.
            </p>
            <h2>Cost of a used engine</h2>
            <p>
            The cost of a used engine can vary based on several factors, including the vehicle's make and model, as well as the specific type of used engine needed. At our platform, we provide competitively priced used engines for sale across the United States. For further details and information, you can visit our website at qualityautoSalvage.com.
            </p>
        </div>
    );
};

export default EngineAssembly;
