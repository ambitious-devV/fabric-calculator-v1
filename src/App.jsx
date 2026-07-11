import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurtainType from "./pages/CurtainType";
import ComingSoon from "./pages/ComingSoon";
import Measurement from "./pages/Measurement";
import ContactUs from "./pages/ContactUs";
import RomanBlind from "./pages/RomanBlind";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curtain" element={<CurtainType />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/measurement/:type" element={<Measurement />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/roman-blind" element={<RomanBlind />} />
    </Routes>
  );
}

export default App;