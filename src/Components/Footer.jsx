import React from 'react';

function Footer() {
  return (
    <footer className="flowout-footer">
      <div className="flowout-container w-container">
        <div className="flowout-footer-hero flowout-section">
          <div className="flowout-hero-wrapper">
            <h2 className="flowout-hero-text flowout-footer-hero-text">Start landing your dream internship</h2>
          </div>
          <div className="flowout-hero-wrapper flowout-hero-buttons">
            <a href="https://webflow.com/website/flowout-saturn" target="_blank" className="flowout-button flowout-button-big flowout-button-cta flowout-button-footer w-button">Get Started</a>
            <a href="#" className="flowout-button flowout-button-big flowout-button-footer w-button">Preview</a>
          </div>
        </div>
        <div className="flowout-footer-copyrights">
          <a href="" target="_blank" className="flowout-footer-logo w-inline-block">
            <h4 style={{color: 'white'}} loading="lazy" alt="">ResuMatch© 2024</h4>
          </a>
          <div className="flowout-footer-menu">
            <a href="#" className="flowout-footer-menu-link">Features</a>
            <a href="#" className="flowout-footer-menu-link">Pricing</a>
            <a href="#" className="flowout-footer-menu-link">Testimonials</a>
            <a href="#faq" className="flowout-footer-menu-link">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
