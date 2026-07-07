import "./CurtainType.css";
import { useNavigate } from "react-router-dom";
import americanPleatImg from "../assets/images/american-pleat.png";
import rippleFoldImg from "../assets/images/ripple-fold.png";
import eyeletImg from "../assets/images/eyelet.png";
import elizaPleatImg from "../assets/images/eliza-pleat.png";

function CurtainType() {
  const navigate = useNavigate();

  const curtainTypes = [
    {
      key: "american",
      title: "AMERICAN PLEAT",
      desc: "Classic & elegant look with triple pleats.",
      icon: "chair",
      image: americanPleatImg,
      comingSoon: false,
    },
    {
      key: "ripple",
      title: "RIPPLE FOLD",
      desc: "Modern & smooth look with ripple folds.",
      icon: "ripple",
      image: rippleFoldImg,
      comingSoon: false,
    },
    {
      key: "eyelet",
      title: "EYELET",
      desc: "Simple & versatile look with eyelet rings.",
      icon: "ripple",
      image: eyeletImg,
      comingSoon: true,
    },
    {
      key: "eliza",
      title: "ELIZA PLEAT",
      desc: "Elegant contemporary look with eliza pleats.",
      icon: "chair",
      image: elizaPleatImg,
      comingSoon: true,
    },
  ];

  function handleCardClick(item) {
    if (item.comingSoon) {
      navigate("/coming-soon");
    } else {
      navigate(`/measurement/${item.key}`);
    }
  }

  return (
    <div className="curtain-page">
      {/* HERO */}
      <section className="curtain-hero">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>

        <div className="curtain-hero-content">
          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>

          <p className="curtain-subtitle">Select Curtain Type</p>

          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="curtain-list">
        {curtainTypes.map((item) => (
          <div
            key={item.key}
            className="type-card"
            onClick={() => handleCardClick(item)}
          >
            <div className="type-left">
              <div className="type-icon">
                {item.icon === "chair" ? (
                  <svg viewBox="0 0 40 40" width="22" height="22">
                    <path
                      d="M8 6 L32 6 L26 18 L26 34 L14 34 L14 18 Z"
                      fill="none"
                      stroke="#173A68"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 40 40" width="22" height="22">
                    <path
                      d="M6 10 Q10 6 14 10 T22 10 T30 10 T34 10"
                      fill="none"
                      stroke="#173A68"
                      strokeWidth="2"
                    />
                    <line x1="8" y1="10" x2="8" y2="34" stroke="#173A68" strokeWidth="2" />
                    <line x1="16" y1="10" x2="16" y2="34" stroke="#173A68" strokeWidth="2" />
                    <line x1="24" y1="10" x2="24" y2="34" stroke="#173A68" strokeWidth="2" />
                    <line x1="32" y1="10" x2="32" y2="34" stroke="#173A68" strokeWidth="2" />
                  </svg>
                )}
              </div>

              <h3>{item.title}</h3>

              <span className="type-divider"></span>

              <p className="type-desc">{item.desc}</p>
            </div>

            <div className="type-image">
              <img src={item.image} alt={item.title} />
              {item.comingSoon && (
                <div className="coming-soon-badge">COMING SOON</div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CurtainType;