import './App.css';
import { useState } from 'react';

function App() {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
const [result, setResult] = useState(null);
const [showCalculation, setShowCalculation] = useState(false);
function calculate() {
if (Number(length) <= 0 || Number(width) <= 0) {
  alert("Please enter valid Length and Width.");
  return;
}
  
 const rawPanels = Number(width) / 20; 

let recommendedPanels = Math.floor(rawPanels);

const remainder = Number(width) % 20;

if (remainder >= 7) {
  recommendedPanels++;
}

if (recommendedPanels < 1) {
  recommendedPanels = 1;
}
const fabricPerPanel = (Number(length) + 10) / 39.37;
  const totalFabric = (fabricPerPanel * recommendedPanels).toFixed(2);

  setResult({
    rawPanels: (Math.round((rawPanels + Number.EPSILON) * 100) / 100).toFixed(2),
    recommendedPanels,
    totalFabric
  });
setShowCalculation(false);
}
  return (
    <div className="container">

      <div className="card">

        <h1>Fabric Calculator</h1>

        <label>Length (inch)</label>
        <input
          type="number"
          placeholder="Enter Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <label>Width (inch)</label>
        <input
          type="number"
          placeholder="Enter Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />

        <button onClick={calculate}>Calculate</button>
{result && (
<>
<div className="result">

<h3>Result</h3>

<p>Raw Panels : {result.rawPanels}</p>

<p>Recommended Panels : {result.recommendedPanels}</p>


<p>Fabric Required : {result.totalFabric} Meter</p>

</div>
<button onClick={() => setShowCalculation(!showCalculation)}>
  {showCalculation ? "Hide Calculation" : "Show Calculation"}
</button>
{showCalculation && (
  <div className="calculation">
    <h3>Calculation</h3>

    <p>
<b>Step 1</b><br />
Length = {length} inch<br />
Allowance = +10 inch<br />
Final Length = {Number(length) + 10} inch
</p>

<hr />

<p>
<b>Step 2</b><br />
Convert to Meter<br />
{Number(length) + 10} ÷ 39.37 = {((Number(length)+10)/39.37).toFixed(2)} Meter
</p>

<hr />

<p>
<b>Step 3</b><br />
Raw Panels<br />
{width} ÷ 20 = {(width/20).toFixed(2)}
</p>

<hr />

<p>
<b>Step 4</b><br />
Recommended Panels = {result.recommendedPanels}
</p>

<hr />

<p>
<b>Step 5</b><br />
Total Fabric<br />
{((Number(length)+10)/39.37).toFixed(2)} × {result.recommendedPanels} = {result.totalFabric} Meter
</p>
  </div>
)}
</>
)}
      </div>

    </div>
  );
}

export default App;