import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import XLIndoorPlants from "./pages/XLIndoorPlants";
import LargeIndoorPlants from "./pages/LargeIndoorPlants";
import MediumIndoorPlants from "./pages/MediumIndoorPlants";
import SmallIndoorPlantsPage from "./pages/SmallIndoorPlantsPage";
import PlantFood from "./pages/PlantFood";
import PlantCare from "./pages/PlantCare";
import BestSelling from "./pages/BestSelling";
import AboutUs from "./pages/AboutUs";
import DealOfThePage from "./pages/DealOfThePage";
import Login from "./pages/Login";
import Cart from './pages/Cart';
import TrackYourOrder from "./pages/TrackYourOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xl-indoor-plants" element={<XLIndoorPlants />} />
        <Route path="/large-indoor-plants" element={<LargeIndoorPlants />} />
        <Route path="/medium-indoor-plants" element={<MediumIndoorPlants />} />
        <Route path="/small-indoor-plants" element={<SmallIndoorPlantsPage />} />
        <Route path="/plant-food" element={<PlantFood />} />
        <Route path="/plant-care" element={<PlantCare />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/deal-of-the-page" element={<DealOfThePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/track-your-order" element={<TrackYourOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
