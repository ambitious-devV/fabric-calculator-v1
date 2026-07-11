import "./RomanBlind.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RomanBlind() {
  const navigate = useNavigate();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [showCalculation, setShowCalculation] = useState(false);

  function calculate() {
    const widthInches = Number(width);
    const heightInches = Number(height);

    if (widthInches <= 0 || heightInches <= 0) {
      alert("Please enter valid Window Width and Window Height.");
      return;
    }

    const fabricMeter = (heightInches + 10) / 39.37;
    const squareFeet = (heightInches * widthInches) / 144;

    setResult({
      widthInches,
      heightInches,
      fabricMeter: fabricMeter.toFixed(2),
      squareFeet: squareFeet.toFixed(2),
    });
    setShowCalculation(false);
  }

  return (
    <div className="roman-page">
      {/* HERO */}
      <section className="roman-hero">
        <button className="back-btn" onClick={() => navigate("/")}>
          ←
        </button>

        <div className="roman-hero-content">
          <div className="roman-icon">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <rect x="8" y="6" width="24" height="4" fill="none" stroke="#173A68" strokeWidth="2" />
              <path d="M9 10 Q20 16 31 10" fill="none" stroke="#173A68" strokeWidth="1.6" />
              <path d="M9 16 Q20 22 31 16" fill="none" stroke="#173A68" strokeWidth="1.6" />
              <path d="M9 22 Q20 28 31 22" fill="none" stroke="#173A68" strokeWidth="1.6" />
              <line x1="9" y1="10" x2="9" y2="30" stroke="#173A68" strokeWidth="1.6" />
              <line x1="31" y1="10" x2="31" y2="30" stroke="#173A68" strokeWidth="1.6" />
            </svg>
          </div>

          <h1 className="roman-title">ROMAN BLIND</h1>

          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>

          <p className="roman-subtitle">Enter Measurements</p>
        </div>
      </section>

      {/* INPUT FIELDS */}
      <div className="input-list">
        <div className="input-card">
          <div className="input-icon">
            <svg viewBox="0 0 40 40" width="24" height="24">
              <line x1="20" y1="4" x2="20" y2="36" stroke="#173A68" strokeWidth="2" />
              <path d="M20 4 L15 10 M20 4 L25 10" fill="none" stroke="#173A68" strokeWidth="2" />
              <path d="M20 36 L15 30 M20 36 L25 30" fill="none" stroke="#173A68" strokeWidth="2" />
            </svg>
          </div>

          <div className="input-text">
            <h3>Window Height</h3>
            <p>Enter total height</p>
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="e.g. 48"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span className="unit-suffix">in</span>
          </div>
        </div>

        <div className="input-card">
          <div className="input-icon">
            <svg viewBox="0 0 40 40" width="24" height="24">
              <line x1="4" y1="20" x2="36" y2="20" stroke="#173A68" strokeWidth="2" />
              <path d="M4 20 L10 15 M4 20 L10 25" fill="none" stroke="#173A68" strokeWidth="2" />
              <path d="M36 20 L30 15 M36 20 L30 25" fill="none" stroke="#173A68" strokeWidth="2" />
            </svg>
          </div>

          <div className="input-text">
            <h3>Window Width</h3>
            <p>Enter total width</p>
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="e.g. 60"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <span className="unit-suffix">in</span>
          </div>
        </div>
      </div>

      {/* CALCULATE BUTTON */}
      <button className="calculate-btn" onClick={calculate}>
        <span className="calc-icon">🧮</span> CALCULATE
      </button>

      {/* RESULT */}
      {result && (
        <div className="result-card">
          <h3>Result</h3>

          <div className="result-row highlight">
            <span>Fabric Required</span>
            <span>{result.fabricMeter} Meter</span>
          </div>

          <div className="result-row highlight">
            <span>Square Feet</span>
            <span>{result.squareFeet} sq.ft</span>
          </div>

          <button
            className="toggle-calc-btn"
            onClick={() => setShowCalculation(!showCalculation)}
          >
            {showCalculation ? "Hide Calculation" : "Show Calculation"}
          </button>

          {showCalculation && (
            <div className="calculation-steps">
              <p>
                <b>Step 1</b>
                <br />
                Height = {result.heightInches} in
                <br />
                Allowance = +10 in
                <br />
                Final Height = {result.heightInches + 10} in
              </p>

              <hr />

              <p>
                <b>Step 2</b>
                <br />
                Convert to Meter
                <br />
                {result.heightInches + 10} ÷ 39.37 = {result.fabricMeter} Meter
              </p>

              <hr />

              <p>
                <b>Step 3</b>
                <br />
                Square Feet (using raw Height × Width)
                <br />
                {result.heightInches} × {result.widthInches} ÷ 144 = {result.squareFeet} sq.ft
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RomanBlind;