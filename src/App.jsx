import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SkillsSection from "./pages/SkillsSection";
import Footer from "./components/Footer";
import ContactSection from "./pages/ContactSection";
import { Toaster } from "react-hot-toast";
import ServiceSection from "./pages/ServiceSection";
import SkeletonSection from "./components/SkeletonSection";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Start fading out skeleton
      setFadeOut(true);

      // Wait for fade-out animation before removing skeleton
      setTimeout(() => {
        setLoading(false);
      }, 500); // should match transition duration
    }, 2000); // simulate load

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <SkeletonSection />
        </div>
      ) : (
        <div className="animate-fade-in transition-opacity duration-500 opacity-100">
          <Navbar />
          <ServiceSection />
          <ContactSection />
          <Footer />
          <Toaster className="top-right" />
        </div>
      )}
    </>
  );
};

export default App;
