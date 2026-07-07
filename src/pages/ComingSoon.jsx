import "./ComingSoon.css";
import { useNavigate } from "react-router-dom";

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="coming-soon-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <div className="coming-soon-content">
        <div className="coming-soon-icon">🧵</div>
        <h1>Coming Soon</h1>
        <p>This curtain type's calculator is under development.</p>
        <p className="sub">We'll notify you once it's ready.</p>
      </div>
    </div>
  );
}

export default ComingSoon;