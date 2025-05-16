import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_4qu3raf',
      'template_ifmyazh',
      templateParams,
      'nxRxF1j0C-CucnBHw'
    ).then(() => {
      setSubmitMessage({
        type: 'success',
        text: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.'
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm currently looking for new opportunities and would love to hear from you.
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-details">
                  <h4 className="method-title">Email</h4>
                  <p className="method-value">shivam.gupta14083110@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h4 className="method-title">Phone</h4>
                  <p className="method-value">+91 9702845312</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h4 className="method-title">Location</h4>
                  <p className="method-value">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">Send me a message</h3>
            {submitMessage && (
              <div className={`submit-message ${submitMessage.type}`}>
                {submitMessage.text}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending<span className="loading-dots">...</span></>
                ) : (
                  <>Send Message <span className="send-icon">📤</span></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
