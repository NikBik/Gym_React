import React from "react";
import "../styles/tailwind.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <section className="contact-details-section">
        <h1>Contact Us</h1>
        <p>
          <strong>Address:</strong> 123 Fitness St, Gym City, Fitland
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@fitlife.com
        </p>
      </section>

      <section className="social-media-section">
        <h2>Follow Us</h2>
        <a
          href="https://facebook.com/fitlife"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/fitlife"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/fitlife"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </section>

      {/* Optional: Map section */}
      <section className="map-section">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4180040217887!2d-122.08175648438867!3d37.38747497983063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d5ea0e7355%3A0x5d0f7fddf81a1d6c!2s123%20Fitness%20St%2C%20Gym%20City%2C%20Fitland!5e0!3m2!1sen!2sus!4v1633399497877!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
