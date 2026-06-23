import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SiteLayout from "@/components/SiteLayout"
import Home from "@/pages/Home"
import CalculatorPage from "@/pages/CalculatorPage"
import Nutrition from "@/pages/Nutrition"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Route>
      </Routes>
    </Router>
  )
}
