import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row mx-auto">

            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>LOGO</h3>
              <p>
                Hammam-lif <br/>
                Ben Arous <br/>
                Tunisia <br/>
                <strong>Phone:</strong> +216 71123321 <br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Posts</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Electrical</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Cleaning</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Plumbing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Babysitter</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex justify-content-center align-items-center py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; 2021 <strong><span>MAYDAY</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-6">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          </div>
      </div>

    </footer>
  );
}
