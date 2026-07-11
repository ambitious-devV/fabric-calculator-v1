import "./Home.css";
import curtain from "../assets/images/curtain.png";
import romanBlind from "../assets/images/roman-blind.png";
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
    <div className="home-wrapper">
      <div className="home">
        {/* PINEAPPLE STICKER */}
        <div className="ornament-badge">
          <svg viewBox="0 0 36 44" width="30" height="36" fill="none">
            <path d="M18 2 C18 2 12 8 14 13" stroke="#143B73" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 2 C18 2 24 8 22 13" stroke="#143B73" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 2 C18 2 18 9 18 13" stroke="#143B73" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 2 C18 2 10 6 12 12" stroke="#143B73" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
            <path d="M18 2 C18 2 26 6 24 12" stroke="#143B73" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
            <ellipse cx="18" cy="28" rx="12" ry="15" fill="#143B73" />
            <line x1="10" y1="21" x2="14" y2="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="14" y1="19" x2="18" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="18" y1="19" x2="22" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="22" y1="21" x2="26" y2="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="9" y1="25" x2="27" y2="25" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="8" y1="29" x2="28" y2="29" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <line x1="9" y1="33" x2="27" y2="33" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          </svg>
        </div>

        {/* HERO */}
        <div className="hero-wrap">
          <div className="hero-bg"></div>
          <div className="hero-divider-line"></div>

          <div className="hero-inner">
            <div className="help-row">
              <button className="help-btn" onClick={() => navigate("/contact-us")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 5.55 5.55l.92-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
            </div>

            <div className="logo-row">
              <div className="logo-seal">
                <div className="logo-seal-ring"></div>
                <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                  <path d="M10 8 C10 8 8 18 12 28 C14 34 12 40 12 40" stroke="#143B73" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M10 8 C14 12 16 20 14 30 C13 36 14 40 14 40" stroke="#143B73" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
                  <path d="M38 8 C38 8 40 18 36 28 C34 34 36 40 36 40" stroke="#143B73" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M38 8 C34 12 32 20 34 30 C35 36 34 40 34 40" stroke="#143B73" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
                  <line x1="6" y1="8" x2="42" y2="8" stroke="#D4AF6A" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="6" cy="8" r="2" fill="#D4AF6A" />
                  <circle cx="42" cy="8" r="2" fill="#D4AF6A" />
                  <path d="M18 24 C21 22 27 22 30 24" stroke="#D4AF6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            <h1 className="hero-title">Fabric Assistant</h1>
            <p className="hero-subtitle">Smart Fabric Calculator</p>

            <div className="gold-divider">
              <span className="gd-line"></span>
              <span className="gd-dot-sm"></span>
              <span className="gd-dot-lg"></span>
              <span className="gd-dot-sm"></span>
              <span className="gd-line"></span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="content-area">
          <div className="choose-row">
            <span className="choose-dot"></span>
            <span className="choose-label">Choose Product</span>
            <span className="choose-dot"></span>
          </div>

          <div className="product-list">
            <div className="product-card" onClick={handleCurtainClick}>
              <div className="product-card-glow"></div>

              <div className="product-image">
                <img src={curtain} alt="Curtain" className="product-img" />
              </div>

              <div className="product-text">
                <h3>Curtain</h3>
                <p>Precision fabric estimation for custom drapery and lined panels</p>
                <span className="product-underline"></span>
              </div>

              <button className={`product-arrow-btn ${sliding ? "slide" : ""}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="product-card" onClick={() => navigate("/roman-blind")}>
              <div className="product-card-glow"></div>

              <div className="product-image">
                <img src={romanBlind} alt="Roman Blind" className="product-img" />
              </div>

              <div className="product-text">
                <h3>Roman Blind</h3>
                <p>Calculate fabric requirements for classic roman blinds</p>
                <span className="product-underline"></span>
              </div>

              <button className="product-arrow-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="benefits-card">
            <div className="benefits-row">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Accurate</span>
              </div>

              <div className="benefit-divider"></div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span>Save Time</span>
              </div>

              <div className="benefit-divider"></div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span>Reduce Wastage</span>
              </div>
            </div>
          </div>

          <div className="footer-card">
            <div className="footer-glow"></div>
            <div className="footer-divider-row">
              <span className="fd-line"></span>
              <span>Version 1.2</span>
              <span className="fd-line"></span>
            </div>
            <p className="footer-tagline">Built for Showrooms. Designed for Accuracy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;