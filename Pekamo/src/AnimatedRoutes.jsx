import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

import Home from "./pages/Home";
import InfoTabs from "./components/InfoTabs";
import AboutSection from "./components/AboutSection";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load secondary routes for better initial performance
const LearnMore = lazy(() => import("./pages/LearnMore"));
const QuotePage = lazy(() => import("./pages/QuotePage"));

// Global page animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.25,
  ease: "easeOut",
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />

          {/* Info Tabs Page */}
          <Route
            path="/info"
            element={
              <motion.div
                key="info"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <InfoTabs />
              </motion.div>
            }
          >
            {/* Nested About Section */}
            <Route
              path="about"
              element={
                <motion.div
                  key="info-about"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <AboutSection />
                </motion.div>
              }
            />
          </Route>

          {/* Learn More Page - LAZY LOADED */}
          <Route
            path="/learn-more"
            element={
              <motion.div
                key="learn-more"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <LearnMore />
              </motion.div>
            }
          />

          {/* Quote Page - LAZY LOADED */}
          <Route
            path="/quote"
            element={
              <motion.div
                key="quote"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <QuotePage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
