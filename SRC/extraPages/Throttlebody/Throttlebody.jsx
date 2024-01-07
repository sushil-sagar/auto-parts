// EngineAssembly.jsx

import React from 'react';
import imageTopLeft from '../../assets/AdobeStock_222202182.jpeg'; // Import your top-left image
import gifImage from '../../assets/Unique-Bargains-Car-Electronic-Throttle-Body-351002E000-for-Kia-for-Hyundai-2-0L_5339400c-fc43-4641-acb2-1237e7789cfb.4da496e977a443b827b2053ea8ae0715.webp'; // Import your right-side image
import rightImage from '../../assets/download.jpeg'; // Import your gif image
import styles from '../ABS/ABS.module.css'; // Import your modular CSS file
import rightImage1 from '../../assets/CleaningThrottleBody_Featured-e1685944810905.webp'; // Import your right-side image
import Imagetwo from '../../assets/volkswagen-throttle-body-e1610229978794.webp'; // Import your gif image

const Throttlebody = () => {
  return (
    <div className={styles.engineContainer}>
      {/* Top Row */}
      <div className={styles.topRow}>
        <img src={imageTopLeft} alt="Top Left" className={styles.topLeftImage} />
        <div className={styles.topRightContent}>
          <h1 className={styles.usedEngines}> THROTTLE BODY  </h1>
          <button className={styles.instantQuoteButton}>Get An Instant Quote</button>
        </div>
      </div>

      {/* Content Row */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h2>The Throttle Body </h2>
          <p>
            The nerve center of your vehicle's engine – the Throttle Body. Often overlooked but critically important, the throttle body plays a central role in regulating the airflow into the engine, influencing the power, efficiency, and overall performance of your vehicle. Let's explore the intricacies of the throttle body and understand why it's a key player in your engine's functionality.
          </p>
          <p>

            The throttle body may operate silently, but its impact on your vehicle's performance is profound. Understanding its function and importance empowers you to appreciate the role it plays in the dynamic interplay of air and fuel within your engine. Regular maintenance and attention to the throttle body contribute to a responsive, efficient, and reliable driving experience.
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

            What is a Throttle Body?

          </h2>
          <p>



            The throttle body is a vital component of the air intake system in an internal combustion engine. Positioned between the air filter and the intake manifold, the throttle body controls the amount of air that enters the engine, allowing the driver to manage engine speed and power output.

          </p>
          <h4>
            Key Components of the Throttle Body:
          </h4>
          <h6>
            1. Throttle Plate:
          </h6>
          <br />
          <p>



            The throttle plate is a movable flap within the throttle body that opens or closes based on driver input. It controls the airflow into the engine.

          </p>
          <h6>2. Throttle Position Sensor (TPS):</h6><br />
          <p>





            The TPS monitors the position of the throttle plate and sends signals to the engine control unit (ECU) to adjust fuel injection and ignition timing accordingly.

          </p>
          <h6>  3. Idle Air Control Valve (IACV):</h6><br />
          <p>




            The IACV regulates the airflow during idle conditions, ensuring the engine runs smoothly at a consistent RPM when the throttle plate is closed.

          </p>
          <h6> 4. Actuator Motor:</h6><br /><p>

            In electronic throttle bodies, an actuator motor controls the movement of the throttle plate based on signals received from the driver's accelerator pedal.

          </p>

        </div>
      </div>


      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h2>
            How the Throttle Body Works:
          </h2>
          <h6>
            Accelerator Input:
          </h6>
          <br />
          <p>


            When the driver presses the accelerator pedal, it sends a signal to the throttle body, prompting the throttle plate to open.

          </p>
          <h6>  Airflow Regulation:</h6><br />
          <p>



            The opening and closing of the throttle plate control the amount of air entering the engine. More air leads to increased engine speed and power, while less air results in decreased speed.

          </p>
          <h6>
            Throttle Position Feedback:</h6><br />
          <p>




            The TPS continuously monitors the position of the throttle plate and relays this information to the ECU. The ECU adjusts fuel injection and other parameters based on this feedback.

          </p>
          <h6>Idle Control:</h6>
          <br />
          <p>


            During idle conditions, the IACV ensures a steady and controlled airflow, preventing stalling or rough idling.

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

            Advantages of a Well-Maintained Throttle Body:
          </h2>
          <h6>1. Improved Engine Response:</h6>
          <br />
          <p>



            A properly functioning throttle body enhances engine response, translating to a more immediate and precise reaction to driver input.

          </p>
          <h6>2. Enhanced Fuel Efficiency:</h6><br /><p>



            Efficient air regulation by the throttle body contributes to improved fuel efficiency, as the engine receives the optimal air-fuel mixture.

          </p>
          <h6>
            3. Smooth Idling:
          </h6><br /><p>





            The throttle body, in conjunction with the IACV, ensures smooth idling, preventing issues such as stalling or rough engine operation when stationary.

          </p>
          <h6>  4. Consistent Power Output:</h6><br /><p>




            Precise control over the airflow allows for consistent power output, providing a stable and reliable driving experience.

          </p>


        </div>
      </div>

      <h2>
        Maintenance Tips for the Throttle Body:
      </h2>
      <h6> Regular Cleaning:</h6><br />
      <p>





        Periodic cleaning of the throttle body prevents the accumulation of carbon deposits, ensuring smooth movement of the throttle plate.

      </p>
      <h6>
        Inspection of Components:</h6><br /><p>


        Regularly inspect the throttle plate, TPS, IACV, and other components for signs of wear, damage, or malfunction. Address issues promptly to avoid performance issues.

      </p>
      <h6>   Air Filter Maintenance:</h6><br /><p>



        A clean and well-maintained air filter contributes to the overall health of the throttle body. Replace the air filter as recommended by the vehicle manufacturer.

      </p>
      <h6> Professional Inspection:</h6><br /><p>


        For thorough maintenance, consider professional inspection and cleaning of the throttle body. Professionals can address issues that may not be visible during routine checks.

      </p>
      <h6>

        We at Quality Auto Salvage understand the integral role that every automotive component plays in ensuring the optimal performance and reliability of your vehicle. As part of our commitment to providing comprehensive solutions for your automotive needs, we take pride in offering high-quality Throttle Bodies. Here's why choosing Quality Auto Salvage for your Throttle Body needs is a decision you can trust:
      </h6><br />


      <h6> 1. Comprehensive Inventory:</h6><br /><p>




        Our extensive inventory encompasses a wide range of Throttle Bodies, catering to various makes and models. Whether you drive a compact car, a robust SUV, or a powerful truck, we have the right Throttle Body to match your specific requirements.

      </p>
      <h6>2. Quality Assurance:</h6><br /><p>






        Quality is a cornerstone of our mission. Each Throttle Body in our inventory undergoes rigorous inspection to ensure it meets or exceeds industry standards. We prioritize the durability and reliability of our products, providing you with components that you can depend on.

      </p>
      <h6>3. OEM Compatibility:</h6><br /><p>



        Our Throttle Bodies are sourced with a focus on Original Equipment Manufacturer (OEM) compatibility. This ensures seamless integration with your vehicle's air intake system, maintaining the original specifications and performance.

      </p>
      <h6>  4. Affordable Solutions:</h6><br /><p>



        At Quality Auto Salvage, we believe in offering cost-effective solutions without compromising on quality. Our Throttle Bodies provide a budget-friendly alternative to new components, allowing you to maintain the optimal performance of your vehicle without straining your budget.

      </p>
      <h6>5. Expert Guidance:</h6><br /><p>



        Navigating the intricacies of automotive components can be challenging. Our team of knowledgeable experts is here to assist you throughout the selection and installation process. Whether you have questions about compatibility or maintenance, we provide the guidance you need for a successful and reliable repair.

      </p>
      <h6>6. Quick Availability:</h6><br /><p>



        Recognizing the urgency of your automotive needs, our streamlined processes and efficient inventory management ensure that the Throttle Body you require is readily available for prompt dispatch. Minimize downtime and get your vehicle back on the road swiftly with Quality Auto Salvage.

      </p>
      <h6>  7. Transparency in Information:</h6><br /><p>




        Transparency is a core value at Quality Auto Salvage. Our product listings feature detailed information about each Throttle Body, empowering you to make well-informed decisions. We believe in providing you with the information you need to choose the right component for your vehicle.

      </p>
      <h6> 8. Environmental Responsibility:</h6><br /><p>



        By opting for a recycled Throttle Body from Quality Auto Salvage, you contribute to sustainable and environmentally responsible practices. Reusing components reduces the demand for new manufacturing, aligning with our commitment to eco-friendly practices in the automotive industry.

      </p>
      <h6> 9. Customer-Centric Approach:</h6><br /><p>



        Our customers are at the forefront of our priorities. We are dedicated to ensuring your satisfaction with our products and services. From selection to installation, our customer-centric approach aims to exceed your expectations and build a lasting relationship based on trust and reliability.

      </p>
      <h6> 10. Secure Transactions:</h6><br /><p>


        Your online security is paramount to us. Quality Auto Salvage employs secure payment gateways and stringent data protection measures to ensure that your online transactions are safe and secure. Shop with confidence on our user-friendly online platform.

      </p>
      <p>

        Choose Quality Auto Salvage for your Throttle Body needs and experience the perfect blend of quality, affordability, and exceptional service. Trust us to be your reliable partner in keeping your vehicle's air intake system operating smoothly and efficiently on every journey.

      </p>
    </div>
  );
};

export default Throttlebody;
