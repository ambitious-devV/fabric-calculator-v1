import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurtainType from "./pages/CurtainType";
import ComingSoon from "./pages/ComingSoon";
import Measurement from "./pages/Measurement";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/curtain" element={<CurtainType />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/measurement/:type" element={<Measurement />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;