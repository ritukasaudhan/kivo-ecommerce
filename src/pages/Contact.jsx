import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <p className="page-eyebrow">GET IN TOUCH</p>

        <h1>
          We'd love to
          <span> hear from you.</span>
        </h1>

        <p>
          Have a question about a product, your order, or Kivo?
          Send us a message and we'll get back to you.
        </p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">

          <div className="contact-info-item">
            <Mail size={20} />

            <div>
              <h3>Email</h3>
              <p>support@kivo.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <MapPin size={20} />

            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>

            {submitted && (
              <p className="form-success">
                Thanks! Your message has been received.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;