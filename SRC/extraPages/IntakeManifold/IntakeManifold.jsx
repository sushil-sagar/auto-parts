// EngineAssembly.jsx

import React from 'react';
import imageTopLeft from '../../assets/V10_Saugrohr_mit_integrierter_Schaltklappensteuerung.jpeg'; // Import your top-left image
import rightImage from '../../assets/intake-manifolds-for-inline-engines_0.jpeg'; // Import your right-side image
import gifImage from '../../assets/c688df49-4a89-4516-9f1d-0f88486e607c.856fe40cc6bc5226407af77a5416127f.jpeg'; // Import your gif image
import styles from '../ABS/ABS.module.css'; // Import your modular CSS file
import rightImage1 from '../../assets/ford-v8-intake-manifolds_0.jpeg'; // Import your right-side image
import Imagetwo from '../../assets/original-factory-plastic-intake-manifold_0.jpeg'; // Import your gif image

const IntakeManifold = () => {
  return (
    <div className={styles.engineContainer}>
      {/* Top Row */}
      <div className={styles.topRow}>
        <img src={imageTopLeft} alt="Top Left" className={styles.topLeftImage} />
        <div className={styles.topRightContent}>
          <h1 className={styles.usedEngines}> INTAKE MANIFOLD  </h1>
          <button className={styles.instantQuoteButton}>Get An Instant Quote</button>
        </div>
      </div>

      {/* Content Row */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h2>Intake Manifold </h2>
          <p>
            The heart of your vehicle's performance – the Intake Manifold. An often overlooked yet critical component in the engine system, the intake manifold plays a pivotal role in ensuring optimal combustion and power delivery. Let's dive into the world of the intake manifold and understand why it's a key player in your vehicle's performance.  </p>
          <p>

            The intake manifold may operate quietly behind the scenes, but its role in your vehicle's performance is undeniable. Understanding its function and importance can empower you to appreciate the intricacies of your vehicle's engine system. Regular maintenance and attention to the intake manifold contribute to a smooth-running engine, ensuring you experience the power and efficiency your vehicle was designed to deliver.
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
          <h2>

            What is an Intake Manifold?

          </h2>
          <p>

            The intake manifold is a crucial part of the internal combustion engine. It serves as the pathway for air to enter the combustion chamber, where it mixes with fuel for the combustion process. This carefully orchestrated mixture is essential for generating power and propelling your vehicle forward.
          </p>
          <h4>
            Key Components of the Intake Manifold:
          </h4>
          <h6>
            1. Runners:
          </h6>
          <br />
          <p>


            The intake manifold consists of runners – passages that direct air from the throttle body to the individual intake ports of the engine cylinders.

          </p>
          <h6>  2. Plenum Chamber:</h6><br />
          <p>




            The plenum chamber is a central space in the intake manifold where air is evenly distributed before entering the individual runners. It helps balance airflow and ensures consistent fuel-air mixture delivery.

          </p>
          <h6>  3. Throttle Body:</h6><br />
          <p>



            Positioned at the entrance of the intake manifold, the throttle body regulates the amount of air entering the manifold. It responds to the driver's accelerator pedal input, controlling engine speed and power output.

          </p>
          <h6>4. Gaskets:</h6><br /><p>
            Intake manifold gaskets seal the connections between the manifold and the engine block, preventing air leaks and maintaining proper pressure.
          </p>

        </div>
      </div>


      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h2>
            How the Intake Manifold Works:
          </h2>
          <h6>
            Air Intake:
          </h6>
          <br />
          <p>


            The process begins with the intake stroke of the engine. The throttle body controls the amount of air allowed into the intake manifold.

          </p>
          <h6>    Air Distribution:</h6><br />
          <p>


            In the plenum chamber, the air is evenly distributed among the individual runners. This ensures each cylinder receives an equal share of the air-fuel mixture.

          </p>
          <h6>
            Mixing with Fuel:</h6><br />
          <p>




            As air travels through the runners, it mixes with fuel injected into the intake ports. This mixture is crucial for combustion in the engine cylinders.

          </p>
          <h6>Combustion:</h6>
          <br />
          <p>
            The well-mixed air-fuel combination enters the combustion chamber during the intake stroke, igniting the spark plug and generating power.
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
          <h2>
            Advantages of a Well-Maintained Intake Manifold:
          </h2><h6> 1. Improved Engine Efficiency:</h6><br />
          <p>


            A properly functioning intake manifold ensures that the right amount of air reaches each cylinder, optimizing combustion for improved engine efficiency.

          </p>
          <h6>     2. Enhanced Power and Performance:</h6><br /><p>


            An efficiently designed intake manifold contributes to increased power and performance by providing the engine with a consistent and well-balanced air-fuel mixture.

          </p>
          <h6>
            3. Fuel Economy:
          </h6><br /><p>





            Optimized air intake contributes to better fuel efficiency, as the engine operates more effectively with the right air-fuel ratio.

          </p>
          <h6>4. Smooth Idling:</h6><br /><p>




            A well-maintained intake manifold supports smooth idling by providing a stable air supply to the engine, preventing rough running or stalling.

          </p>


        </div>
      </div>

      <h2>
        Maintenance Tips for the Intake Manifold:
      </h2>
      <h6> Regular Inspections:</h6><br />
      <p>



        Regular Inspection:
        Periodic visual inspections of the intake manifold and associated components can help identify issues such as leaks or corrosion.

      </p>
      <h6>   Lubrication:</h6><br /><p>



        Cleaning:
        Keeping the intake manifold and throttle body clean from carbon deposits and debris ensures unobstructed airflow and optimal performance.

      </p>
      <h6>  Wheel Alignment:</h6><br /><p>


        Gasket Checks:
        Check and replace intake manifold gaskets if signs of wear or leaks are detected. Proper sealing is crucial for maintaining air pressure.

      </p>
      <h6>  Timely Repairs:</h6><br /><p>

        Throttle Body Maintenance:
        Ensure the throttle body is functioning correctly and is free from deposits. Regular cleaning can prevent issues with air regulation.

      </p>
      <h6>
        We at Quality Auto Salvage understand the critical role that every automotive component plays in ensuring the performance and reliability of your vehicle. As part of our commitment to offering comprehensive solutions for your automotive needs, we take pride in providing top-notch Intake Manifolds. Here's why choosing Quality Auto Salvage for your Intake Manifold needs is a decision you can trust:
      </h6><br />


      <h6> 1. Comprehensive Inventory:</h6><br /><p>




        Our extensive inventory features a diverse range of Intake Manifolds, catering to various makes and models. Whether you drive a compact car, a robust SUV, or a powerful truck, we have the right Intake Manifold to suit your specific requirements.

      </p>
      <h6>2. Quality Assurance:</h6><br /><p>







        Quality is at the forefront of our mission. Each Intake Manifold in our inventory undergoes thorough inspection to ensure it meets or exceeds industry standards. We prioritize the durability and reliability of our products, offering you components that you can trust.

      </p>
      <h6>3. OEM Compatibility:</h6><br /><p>



        Our Intake Manifolds are sourced with a focus on Original Equipment Manufacturer (OEM) compatibility. This ensures a seamless integration with your vehicle's engine system, maintaining the original specifications and performance.

      </p>
      <h6>  4. Affordable Solutions:</h6><br /><p>



        Quality Auto Salvage is dedicated to providing cost-effective solutions without compromising quality. Our Intake Manifolds offer a budget-friendly alternative to new components, allowing you to maintain the optimal performance of your vehicle without breaking the bank.

      </p>
      <h6>5. Expert Guidance:</h6><br /><p>


        Navigating the world of automotive components can be complex. Our team of knowledgeable experts is here to assist you at every step. Whether you have questions about compatibility, installation, or maintenance, we provide the guidance you need for a successful and reliable repair.

      </p>
      <h6>6. Quick Availability:</h6><br /><p>



        We understand the urgency of your automotive needs. Our streamlined processes and efficient inventory management ensure that the Intake Manifold you require is available for prompt dispatch. Minimize downtime and get your vehicle back on the road swiftly with Quality Auto Salvage.

      </p>
      <h6>  7. Transparency in Information:</h6><br /><p>




        Transparency is a core value at Quality Auto Salvage. Our product listings include detailed information about each Intake Manifold, empowering you to make well-informed decisions. We believe in giving you the information you need to choose the right component for your vehicle.

      </p>
      <h6> 8. Environmental Responsibility:</h6><br /><p>



        By choosing a recycled Intake Manifold from Quality Auto Salvage, you contribute to sustainable and environmentally responsible practices. Reusing components reduces the demand for new manufacturing, aligning with our commitment to eco-friendly practices in the automotive industry.

      </p>
      <h6> 9. Customer-Centric Approach:</h6><br /><p>



        Our customers are our priority. We are dedicated to ensuring your satisfaction with our products and services. From selection to installation, our customer-centric approach aims to exceed your expectations and build a lasting relationship based on trust and reliability.

      </p>
      <h6> 10. Secure Transactions:</h6><br /><p>


        Your online security is paramount to us. Quality Auto Salvage employs secure payment gateways and stringent data protection measures to ensure that your online transactions are safe and secure. Shop with confidence on our user-friendly online platform.

      </p>
      <p>
        Choose Quality Auto Salvage for your Intake Manifold needs, and experience the blend of quality, affordability, and exceptional service. Trust us to be your reliable partner in keeping your vehicle's engine running smoothly and reliably on every journey.
      </p>
    </div>
  );
};

export default IntakeManifold;
