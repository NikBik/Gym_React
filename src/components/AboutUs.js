import React from "react";
import "../styles/tailwind.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="intro-section">
        <h1>About Us</h1>
        <p>
          Welcome to FitLife Gym, where your fitness journey begins! Our mission
          is to empower individuals to achieve their health and wellness goals
          through top-notch facilities, expert guidance, and a supportive
          community.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Founded in 2010, FitLife Gym has grown from a small neighborhood
          fitness center into one of the leading gyms in the region. With
          several locations and a wide range of services, we continue to
          innovate and inspire.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYQKReWELg3JWCYMbMekGzyltp1_77p2eRQ&s"
            alt="Trainer 1"
          />
          <h3>John Doe</h3>
          <p>
            Certified Personal Trainer with 10 years of experience in strength
            training and nutrition.
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6p5OnO_OwmiArDhynEY3CUxiu9ozhvzWhg&s"
            alt="Trainer 2"
          />
          <h3>Jane Smith</h3>
          <p>
            Group Fitness Instructor specializing in high-intensity interval
            training and yoga.
          </p>
        </div>
      </section>

      <section className="facilities-section">
        <h2>Our Facilities</h2>
        <p>
          Our gym features state-of-the-art equipment, a wide range of fitness
          classes, and luxurious amenities. From cardio machines to weight
          training areas, we have everything you need for a complete workout.
        </p>
      </section>

      <section className="community-section">
        <h2>Our Community</h2>
        <p>
          At FitLife Gym, we believe in building a supportive and inclusive
          community. We regularly host events and workshops to help our members
          connect and stay motivated.
        </p>
      </section>

      <section className="testimonials-section">
        <h2>What Our Members Say</h2>
        <blockquote>
          <p>
            "FitLife Gym has completely transformed my approach to fitness. The
            trainers are amazing and the community is so welcoming!"
          </p>
          <footer>- Alex R.</footer>
        </blockquote>
        <blockquote>
          <p>
            "I love the variety of classes and the quality of equipment. It’s
            the perfect place to stay fit and have fun."
          </p>
          <footer>- Emma W.</footer>
        </blockquote>
      </section>

      <section className="cta-section">
        <h2>Join Us Today</h2>
        <p>
          Ready to start your fitness journey? Visit us today to learn more
          about our membership options and get started!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
