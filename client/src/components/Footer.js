import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <h2>Thankyou for visiting!</h2>
      </div>
      {/* <div className="footer-body">
        <div className="footer-info">
          <h3>What is this site?</h3>
          <p>
            This website was made as a sample project by{" "}
            <a href="https://www.linkedin.com/in/rishi-rusia-90a499230/">
              Rishi Rusia
            </a>{" "}
            , Pawpals is a fictional dog adoption site which does not repesent a
            real business in any way.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>
            You can reach out to me on rishirusiayolo@gmail.com, or any of my
            social media handles
          </p>
        </div>
      </div> */}

      <div className="footer-end">
        <div className="contactlist">
          <a href="https://www.instagram.com/rishirusia/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/rishi-rusia-90a499230/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Rishi-Rusia">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/Rishi_512">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        © 2018-2022 Pawpals Pet Services Private Limited. All Rights Reserved
      </div>
    </div>
  );
}
