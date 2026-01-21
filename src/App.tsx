import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/LoadingSpinner";
import "./App.css";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage").then(m => ({ default: m.IndustriesPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import("./pages/CareersPage").then(m => ({ default: m.CareersPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

// Animated page wrapper
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Routes with animation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
        <Route path="/industries" element={<AnimatedPage><IndustriesPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        <Route path="/careers" element={<AnimatedPage><CareersPage /></AnimatedPage>} />
        <Route path="/privacy" element={<AnimatedPage><PrivacyPage /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
