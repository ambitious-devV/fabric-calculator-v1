import "./Home.css";
import logo from "../assets/images/logo.png";
import curtain from "../assets/images/curtain.png";
import romanBlind from "../assets/images/roman-blind.png";
import accurateIcon from "../assets/images/accurate-icon.png";
import saveTimeIcon from "../assets/images/save-time-icon.png";
import reduceWasteIcon from "../assets/images/reduce-waste-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [sliding, setSliding] = useState(false);

  function handleCurtainClick() {
    setSliding(true);
    setTimeout(() => {
      navigate("/curtain");
    }, 350);
  }

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <button className="help-btn" onClick={() => navigate("/contact-us")}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.5 2.4.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.3 2.5.8 3.6.1.4.1.8-.2 1.1L6.6 10.8z"
              fill="#173A68"
            />
          </svg>
        </button>

        <div className="hero-content">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>

          <h1 className="title">FABRIC ASSISTANT</h1>

          <p className="subtitle">Smart Fabric Calculator</p>

          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>
      </section>

      {/* CHOOSE PRODUCT */}
      <section className="choose-section">
        <div className="choose-title">
          <span className="line-dot"></span>
          <h2>CHOOSE PRODUCT</h2>
          <span className="line-dot"></span>
        </div>

        <div className="product-card" onClick={handleCurtainClick}>
          <div className="product-image">
            <img src={curtain} alt="Curtain" className="product-img" />
          </div>

          <div className="product-info">
            <h3>CURTAIN</h3>
            <div className={`arrow-circle ${sliding ? "slide" : ""}`}>→</div>
          </div>
        </div>

        <div className="product-card" onClick={() => navigate("/coming-soon")}>
          <div className="product-image">
            <img src={romanBlind} alt="Roman Blind" className="product-img" />
          </div>

          <div className="product-info">
            <h3>ROMAN BLIND</h3>
            <div className="arrow-circle">→</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div className="features-card">
        <div className="feature-item">
          <div className="feature-icon">
            <img src={accurateIcon} alt="Accurate" className="feature-img" />
          </div>
          <p>ACCURATE</p>
        </div>

        <div className="feature-divider"></div>

        <div className="feature-item">
          <div className="feature-icon">
            <img src={saveTimeIcon} alt="Save Time" className="feature-img" />
          </div>
          <p>SAVE TIME</p>
        </div>

        <div className="feature-divider"></div>

        <div className="feature-item">
          <div className="feature-icon">
            <img src={reduceWasteIcon} alt="Reduce Wastage" className="feature-img" />
          </div>
          <p>REDUCE WASTAGE</p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-version">✦ &nbsp; VERSION 1.2 &nbsp; ✦</div>
        <p>BUILT FOR SHOWROOMS. DESIGNED FOR ACCURACY.</p>
      </div>
    </div>
  );
}

export default Home;