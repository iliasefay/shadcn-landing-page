import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { ContactPage } from "./pages/ContactPage";
import { CareersPage } from "./pages/CareersPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
