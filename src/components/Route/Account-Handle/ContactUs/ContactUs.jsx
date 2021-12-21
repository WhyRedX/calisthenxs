import React from "react";
import "./ContactUs.css";
import "../Account.css";

export function ContactUs() {
  return (
    <section id="contact-section">
      <div className="contact-container container-lr center">
        <div className="contact-head head-lr">
          <h1>
            Contact <span>Us</span>
          </h1>
        </div>
        <div className="contact-text">
          <p>
            Please make sure to also check your spam and ad folder in your inbox
            and add our email address to your address book.
          </p>
        </div>
        <div className="contact-form form-lr center">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Type your email" required />
            <textarea></textarea>
            <div className="contact-footer footer-lr">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
