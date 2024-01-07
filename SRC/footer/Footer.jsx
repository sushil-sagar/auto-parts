import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logoImage from '../assets/logomain.png';
import { Link } from 'react-router-dom';
import "./footer.css";

export default function Footer() {
  const phoneNumber = '+1 (888) 720-2716';

  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='info' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='danger' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h1 className='text-uppercase fw-bold mb-4'>
        {/* Use the imported logoImage */}
        <img src={logoImage} alt='Logo' className='me-3' style={{ width: '300px', height: '250px', backgroundColor:'transparent', backgroundSize:'100% 100% '}} />
      </h1>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.4191077787973!2d-76.83966472533463!3d39.301422422766194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f0f73ed659b%3A0x8f203cc76d25983!2sQUALITY%20AUTO%20SALVAGE%20LLC!5e0!3m2!1sen!2sin!4v1704240107208!5m2!1sen!2sin"
                width="275"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Used Engines For Sale</h6>
              <p>
                <Link to="/engine-assembly" className="text-reset">
                  Engine Assembly
                </Link>
              </p>
              <p>
                <Link to='/transmission' className='text-reset'>
                  Transmission
                </Link>
              </p>
              <p>
                <a href='/axle-assembly' className='text-reset'>
                  Axle Assembly
                </a>
              </p>
              <p>
                <a href='/transfer-case' className='text-reset'>
                  Transfer case
                </a>
              </p>
              <p>
                <a href='/abs-module' className='text-reset'>
                  Anti lock brake system(ABS)
                </a>
              </p>
              <p>
                <a href='/intake-manifold' className='text-reset'>
                  Intake Manifold
                </a>
              </p>
              

              <p>
                <a href='/hollander' className='text-reset'>
                  Modules - includes all from Hollander 590 & 591
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/axle-shaft' className='text-reset'>
                  Axle Shaft
                </a>
              </p>
              <p>
                <a href='/throttle-body' className='text-reset'>
                  Throttle body

                </a>
              </p>
              <p>
                <a href='/steering-column' className='text-reset'>
                  Steering Column
                </a>
              </p>
              <p>
                <a href='/headlight-assembly' className='text-reset'>
                  Headlight Assembly
                </a>
              </p>
              <p>
                <a href='/strut' className='text-reset'>
                  Strut
                </a>
              </p>
              <p>
                <a href='/spindle-or-knuckle' className='text-reset'>
                  Spindle
                </a>
              </p>
              <p>
                <a href='/exhaust-manifold' className='text-reset'>
                  Exhaust Manifold
                </a>
              </p>
            
              <p>
                <a href='speedometer-cluster' className='text-reset'>
                  Instrument/Speedometer Cluster
                </a>
              </p>
              <p>
                <a href='/drive-shaft' className='text-reset'>
                  Drive Shaft
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
              <p>
                <Link to="/warranty-return-refund-policy" className="text-reset">
                  WARRANTY, RETURN & REFUND POLICY
                </Link>
              </p><p>
                <Link to="/terms-condition" className="text-reset">
                  TERMS & CONDITIONS
                </Link>
              </p><p>
                <Link to="/shipping-policy" className="text-reset">
                  SHIPPING POLICY
                </Link>
              </p><p>
                <Link to="/privacy-policy" className="text-reset">
                  PRIVACY POLICY
                </Link>
              </p>

              <h6 className='text-uppercase fw-bold mb-4'>Contact </h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Quality Auto Salvage LLC
              </p>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                9395 Tiller Dr Ellicott City, MD 21042, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@qualityautosalvages.com
              </p>
              <p onClick={handlePhoneNumberClick}>
                <MDBIcon color='secondary' icon='phone' className='me-3' />
                Phone: {phoneNumber}
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> Fax: +1 (240) 581-1645
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://qualityautosalvages.com/'>
          QualityAutoSalvages.com
        </a>
      </div>
    </MDBFooter>
  );
}