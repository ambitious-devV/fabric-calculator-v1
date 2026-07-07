import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="contact-hero-content">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" width="34" height="34">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.5 2.4.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.3 2.5.8 3.6.1.4.1.8-.2 1.1L6.6 10.8z"
                fill="#173A68"
              />
            </svg>
          </div>

          <h1 className="contact-title">CONTACT US</h1>

          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>

          <p className="contact-subtitle">We're here to help</p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <div className="contact-card">
        <div className="contact-icon-circle">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.5 2.4.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.3 2.5.8 3.6.1.4.1.8-.2 1.1L6.6 10.8z"
              fill="#173A68"
            />
          </svg>
        </div>

        <h3>Call Us</h3>
        <p className="contact-desc">
          For any questions, support, or feedback — reach out to us directly.
        </p>

        <div className="phone-box">+91 72081 96844</div>

        <a href="tel:+917208196844" className="call-btn">
          CALL NOW
        </a>
      </div>
    </div>
  );
}

export default ContactUs;