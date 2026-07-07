import "./Measurement.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import panelLookLess from "../assets/images/panel-look-less.png";
import panelLookMore from "../assets/images/panel-look-more.png";
import ripplePanelLookLess from "../assets/images/ripple-panel-look-less.png";
import ripplePanelLookMore from "../assets/images/ripple-panel-look-more.png";

const TYPE_INFO = {
  american: { title: "AMERICAN PLEAT", icon: "chair" },
  ripple: { title: "RIPPLE FOLD", icon: "ripple" },
};

const BELT_ALLOWANCE = 0.25;

function Measurement() {
  const navigate = useNavigate();
  const { type } = useParams();
  const info = TYPE_INFO[type] || TYPE_INFO.american;

  const lessImg = type === "ripple" ? ripplePanelLookLess : panelLookLess;
  const moreImg = type === "ripple" ? ripplePanelLookMore : panelLookMore;

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [panelChoice, setPanelChoice] = useState(null);
  const [showCalculation, setShowCalculation] = useState(false);

  function calculate() {
    const widthInches = Number(width);
    const heightInches = Number(height);

    if (widthInches <= 0 || heightInches <= 0) {
      alert("Please enter valid Window Width and Window Height.");
      return;
    }

    const rawPanels = widthInches / 20;
    const lowerPanels = Math.max(1, Math.floor(rawPanels));
    const remainder = widthInches % 20;
    const fraction = remainder / 20;

    const isChooseCase = fraction > 0.1 && fraction <= 0.6;

    let recommendedPanels;
    if (isChooseCase) {
      recommendedPanels = lowerPanels + 1;
    } else if (fraction <= 0.1) {
      recommendedPanels = lowerPanels;
    } else {
      recommendedPanels = lowerPanels + 1;
    }
    if (recommendedPanels < 1) recommendedPanels = 1;

    const fabricPerPanel = (heightInches + 10) / 39.37;

    setResult({
      widthInches,
      heightInches,
      rawPanels: (Math.round((rawPanels + Number.EPSILON) * 100) / 100).toFixed(2),
      lowerPanels,
      recommendedPanels,
      isChooseCase,
      fabricPerPanel,
    });
    setPanelChoice(isChooseCase ? null : recommendedPanels);
    setShowCalculation(false);
  }

  const chosenPanels = result
    ? result.isChooseCase
      ? panelChoice
      : result.recommendedPanels
    : null;

  const baseFabric = chosenPanels && result ? result.fabricPerPanel * chosenPanels : null;
  const totalWithBelt = baseFabric ? (baseFabric + BELT_ALLOWANCE).toFixed(2) : null;

  return (
    <div className="measurement-page">
      {/* HERO */}
      <section className="measurement-hero">
        <button className="back-btn" onClick={() => navigate("/curtain")}>
          ←
        </button>

        <div className="measurement-hero-content">
          <div className="measurement-icon">
            {info.icon === "chair" ? (
              <svg viewBox="0 0 40 40" width="34" height="34">
                <path
                  d="M8 6 L32 6 L26 18 L26 34 L14 34 L14 18 Z"
                  fill="none"
                  stroke="#173A68"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 40 40" width="34" height="34">
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

          <h1 className="measurement-title">{info.title}</h1>

          <div className="slider-dots">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>

          <p className="measurement-subtitle">Enter Measurements</p>
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

        <div className="input-card">
          <div className="input-icon">
            <svg viewBox="0 0 40 40" width="24" height="24">
              <circle cx="14" cy="14" r="8" fill="none" stroke="#173A68" strokeWidth="2" />
              <path d="M14 22 L30 32" stroke="#173A68" strokeWidth="2" />
            </svg>
          </div>

          <div className="input-text">
            <h3>Fabric Width</h3>
            <p>Enter fabric width</p>
          </div>

          <div className="input-box disabled">
            <input type="text" value="54" readOnly />
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

          <div className="result-row">
            <span>Raw Panels</span>
            <span>{result.rawPanels}</span>
          </div>

          <div className="result-row">
            <span>Recommended Panels</span>
            <span>{result.recommendedPanels}</span>
          </div>

          {result.isChooseCase && (
            <div className="choose-panel">
              <h4>Choose Panel</h4>

              <div className="panel-options">
                <button
                  className={`panel-option ${panelChoice === result.lowerPanels ? "selected" : ""}`}
                  onClick={() => setPanelChoice(result.lowerPanels)}
                >
                  <span className="panel-radio"></span>
                  {result.lowerPanels}
                </button>

                <button
                  className={`panel-option ${panelChoice === result.recommendedPanels ? "selected" : ""}`}
                  onClick={() => setPanelChoice(result.recommendedPanels)}
                >
                  <span className="panel-radio"></span>
                  {result.recommendedPanels}
                </button>
              </div>

              <div className="panel-info">
                <p>
                  <b>{result.lowerPanels}</b> — Economical, less gathering, average look
                </p>
                <div className="panel-image-placeholder">
                  <img src={lessImg} alt={`${result.lowerPanels} Panel Look`} className="panel-look-img" />
                </div>

                <p>
                  <b>{result.recommendedPanels}</b> — Clean, premium look with good gathering
                </p>
                <div className="panel-image-placeholder">
                  <img src={moreImg} alt={`${result.recommendedPanels} Panel Look`} className="panel-look-img" />
                </div>
              </div>
            </div>
          )}

          {chosenPanels ? (
            <>
              <div className="result-row highlight">
                <span>Fabric Required</span>
                <span>{totalWithBelt} Meter</span>
              </div>

              <div className="belt-note">
                <span>*belt included</span>
                <span>+0.25 m</span>
              </div>
            </>
          ) : (
            <p className="select-prompt">Select a panel option above to see fabric required.</p>
          )}

          {chosenPanels && (
            <button
              className="toggle-calc-btn"
              onClick={() => setShowCalculation(!showCalculation)}
            >
              {showCalculation ? "Hide Calculation" : "Show Calculation"}
            </button>
          )}

          {showCalculation && chosenPanels && (
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
                {result.heightInches + 10} ÷ 39.37 = {result.fabricPerPanel.toFixed(2)} Meter
              </p>

              <hr />

              <p>
                <b>Step 3</b>
                <br />
                Raw Panels
                <br />
                {result.widthInches} ÷ 20 = {result.rawPanels}
              </p>

              <hr />

              <p>
                <b>Step 4</b>
                <br />
                Chosen Panels = {chosenPanels}
              </p>

              <hr />

              <p>
                <b>Step 5</b>
                <br />
                Fabric Before Belt
                <br />
                {result.fabricPerPanel.toFixed(2)} × {chosenPanels} = {baseFabric.toFixed(2)} Meter
              </p>

              <hr />

              <p>
                <b>Step 6</b>
                <br />
                0.25 meter extra fabric taken for belt
                <br />
                {baseFabric.toFixed(2)} + 0.25 = {totalWithBelt} Meter
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Measurement;