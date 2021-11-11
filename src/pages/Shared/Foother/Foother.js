import React from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faEnvelopeOpenText,
    faBlenderPhone,
    faSearchLocation,


} from '@fortawesome/free-solid-svg-icons'

import "./Foother.css";
const Foother = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Best Bycycle Products</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon = {faBlenderPhone}/>
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon = {faSearchLocation}/>
                  </div>
                  <div className="icon">
                     <FontAwesomeIcon icon = {faEnvelopeOpenText}/> 
                  </div>
                 
                </div>
                <p className="mt-4 ">
                  <small>
How much is a service from a bike shop.Costs involved
for a basic bike service are
for the check over, any new parts, and the labour
for the work carried out....This bike service will include brake & gear adjustment, general lubrication and a tyre inflation check.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Best Bycycle House© . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Service</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>My All Services Register</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    
                  </div>
                  <div>
                    <h5>+8801786299934</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                   
                  </div>
                  <div>
                    <p>
                      023 Shariatpur, Dhaka,Bangladesh 1200,
                      <br /> Road No.02, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Foother;