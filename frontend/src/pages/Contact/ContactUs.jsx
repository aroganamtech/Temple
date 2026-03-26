import React, { useEffect, useState } from "react";
import '../../style/pages/contact/Contact.scss'; // Importing the advanced styles

export default function ContactUs() {
  // State to store form details
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 200);
    });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("%c Form Submission Received ", "background: #8B6B2E; color: #fff; font-weight: bold; padding: 5px;");
    console.table(formData); // Displays data in a clean table in the console
    // alert("Data stored in console! Open Inspect > Console to view.");
  };

  return (
    <div className="contact-page">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@600&family=Inter:wght@400&display=swap" rel="stylesheet" />

      <div className="hero-section">
        <h1 className="fade-in">Contact Us</h1>
        <p className="fade-in subtitle">We would love to hear from you</p>
      </div>

      <div className="form-container">
        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <div className="input-group row">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="mobile" 
              placeholder="Enter Mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Enter Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group row">
            <input 
              type="text" 
              name="location" 
              placeholder="Enter Location" 
              value={formData.location} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>

          <div className="button-wrapper">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>

      <div className="map-section fade-in">
        <iframe
          title="Temple Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345059173!2d144.9537353153166!3d-37.81627977975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2230d5708!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1611555555555!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}