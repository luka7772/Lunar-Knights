// src/pages/ServicePage.js
import React from 'react';

function ServicePage() {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p>At Lunar Knights, we offer a variety of services to help you achieve your fitness goals.</p>

      <div className="service-list">
        <div className="service-item">
          <h2>Personal Training</h2>
          <p>One-on-one personal training sessions with our expert trainers tailored to your needs.</p>
        </div>

        <div className="service-item">
          <h2>Group Classes</h2>
          <p>Join our group classes for a fun and interactive fitness experience with others.</p>
        </div>

        <div className="service-item">
          <h2>Nutrition Coaching</h2>
          <p>Receive personalized nutrition plans and advice to fuel your body for optimal performance.</p>
        </div>

        <div className="service-item">
          <h2>Online Training</h2>
          <p>Get the flexibility of training from home with our online coaching and workout programs.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
