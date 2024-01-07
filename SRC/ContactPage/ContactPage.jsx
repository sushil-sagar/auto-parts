// ContactPage.jsx

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactPage.module.css';
import bgImage from '../assets/bg17.webp';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={styles['contact-container']}>
      <div className={styles['top-section']} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles['content-center']}>
          {/* Content to be centered */}
          <h1 className={styles['centered-text']}>Contact Us</h1>
        </div>
      </div>
      <div className={styles['form-and-about-section']}>
        <div className={styles['about-section']}>
          <h4 style={{textAlign:'center', marginTop:'20px'}}>Welcome to Quality Auto Salvage</h4>
          <p>
          At Quality Auto Salvage, we are dedicated to providing a wide range of top-quality auto parts for various brands to ensure your vehicle's peak performance. Our commitment lies in offering meticulously selected parts, backed by a promise of reliability and excellence.
          </p><br />
          <h4 style={{textAlign:'center', marginTop:'20px'}}>Explore Our Extensive Collection</h4>
          <p>
          Discover an extensive inventory of genuine auto parts from renowned brands. Whether you're seeking components for routine maintenance, repairs, or upgrades, our selection caters to diverse automobile needs.
          </p>
          <br />
          <h4 style={{textAlign:'center', marginTop:'20px'}}>Expertise You Can Trust</h4>
          <p>
          With years of industry expertise, our team is passionate about delivering unparalleled service and ensuring that you find the perfect parts for your vehicle. We prioritize customer satisfaction and strive to make your shopping experience seamless and efficient.
          </p>
        </div>

        <div className={styles['contact-form-section']}>
          <h1 style={{textAlign:'center',marginRight:'20px',marginTop:'25px', color:'white'}}>Get in Touch with us</h1>
          <form className={styles['contact-form']} onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter Subject" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter Your Message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </div>
      </div>

      <div className={styles['contact-details']}>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaEnvelope className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h4>Email</h4>
            <p>
              <a href="mailto:mkindoasian@gmail.com">mkindoasian@gmail.com</a>
              <br />
              <a href="mailto:support@gurudevelectric.com">support@gurudevelectric.com</a>
            </p>
          </div>
        </div>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaPhone className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h4>Phone</h4>
            <p>
                <a href="tel:+18887202716">Phone: +1 (888) 720-2716</a>
                <br />
                <a href="tel:+1(240) 437-4542">Fax: +91 80 4165 3133</a>
              </p>
          </div>
        </div>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaMapMarkerAlt className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h4>Address</h4>
            <p>
            9395 Tiller Dr Ellicott City,<br /> MD 21042, US
              </p>
          </div>
        </div>
        {/* Add more contact rows */}
      </div>

      <div className={styles['location-section']}>
        <h1>Location</h1>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.4191077787973!2d-76.83966472533463!3d39.301422422766194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f0f73ed659b%3A0x8f203cc76d25983!2sQUALITY%20AUTO%20SALVAGE%20LLC!5e0!3m2!1sen!2sin!4v1704240107208!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
