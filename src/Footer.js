import React from "react";
import './Footer.css';
// import logo1 from './image/logo1.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-body">
                    <div>
                        {/* <img src={logo1} alt="logo" /> */}
                        <img src="https://assets-global.website-files.com/5ebb0930dd82631397ddca92/5f0ce08fc24e5ad3c607a96b_element-formstack-light-logo.svg" width="160" height="42" alt="" loading="lazy" classNme="image-3" />
                        <p className="footer-p">Formstack’s workplace productivity platform helps over 25,000+ organizations digitize what matters, automate workflows, and fix processes—all without code.</p>
                        <ul className="icon-parent">
                            <li> <a href="/" className="footer-anchor"><FaFacebookF className="footer-icon" /></a> </li>
                            <li><a href="/" className="footer-anchor"><FaInstagram className="footer-icon" /></a></li>
                            <li><a href="/" className="footer-anchor"><FaTwitter className="footer-icon" /></a></li>
                            <li><a href="/" className="footer-anchor"><FaLinkedinIn className="footer-icon" /></a></li>
                            <li><a href="/" className="footer-anchor"><FaYoutube className="footer-icon" /></a></li>

                        </ul>
                        <a href="/" target="_blank">
                <img src="https://assets-global.website-files.com/5ebb0930dd82631397ddca92/604f9901f98307554b0b0293_5eef7ea260847de0de84164c_Apple%20App%20Store.min.svg" loading="lazy" alt="" className="footer-app-store" /></a>
              <a href="/" target="_blank">
                <img src="https://assets-global.website-files.com/5ebb0930dd82631397ddca92/604f9900f25692fe7344c8d9_5f0cd49d8f3f6d28a806101a_element-google-play-store.min.svg" loading="lazy" alt="" className="footer-app-store" /></a>
                    </div>
                    <div>
                        <ul>
                            <li className="footer-heading" >Products</li>
                            <li><a href="/" className="footer-anchor">Formstack platform</a></li>
                            <li><a href="/" className="footer-anchor">Forms</a></li>
                            <li><a href="/" className="footer-anchor">Documents</a></li>
                            <li><a href="/" className="footer-anchor">Sign</a></li>
                            <li><a href="/" className="footer-anchor">Form stack for SalesForce</a></li>
                            <li><a href="/" className="footer-anchor">Integration</a></li>
                            <li><a href="/" className="footer-anchor">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="footer-heading">Resources</li>
                            <li><a href="/" className="footer-anchor">Resources Center</a></li>
                            <li><a href="/" className="footer-anchor">Templates</a></li>
                            <li><a href="/" className="footer-anchor">Blog</a></li>
                            <li><a href="/" className="footer-anchor">Newsletter</a></li>
                            <li><a href="/" className="footer-anchor">Site Map</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="footer-heading">Support</li>
                            <li><a href="/" className="footer-anchor">Support Center</a></li>
                            <li><a href="/" className="footer-anchor">Find a Partner</a></li>
                            <li><a href="/" className="footer-anchor">Professional Services</a></li>
                            <li><a href="/" className="footer-anchor">Release Notes</a></li>
                            <li><a href="/" className="footer-anchor">Developers and API</a></li>
                            <li><a href="/" className="footer-anchor">System Status</a></li>
                            <li><a href="/" className="footer-anchor">Report Abuse</a></li>
                            <li><a href="/" className="footer-anchor">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="footer-heading">Company</li>
                            <li><a href="/" className="footer-anchor">About Us</a></li>
                            <li><a href="/"> className="footer-anchor"Press</a></li>
                            <li><a href="/" className="footer-anchor">Brand</a></li>
                            <li><a href="/" className="footer-anchor"> Parner Program</a></li>
                            <li><a href="/" className="footer-anchor">Careers</a></li>
                            <li><a href="/" className="footer-anchor">Do Not Sell My Personal Information</a></li>
                        </ul>
                    </div>

                </div>
                <div className="footer-copyright">
                    <h5>Built with care by 'Stackers all over the world. Copyright © 2023 Formstack</h5>
                    <ul className="footer-copyul">
                        <li><a href="/" className="footer-anchor">Privacy Policy</a></li>
                        <li><a href="/" className="footer-anchor">CCPA</a></li>
                        <li><a href="/" className="footer-anchor">3rd Party Services Disclaimer</a></li>
                        <li><a href="/" className="footer-anchor"> Website Terms of Use</a></li>
                        <li><a href="/" className="footer-anchor"> Trust Center</a></li>

                    </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;