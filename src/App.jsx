import React from "react";
import Navbar from "./components/Navbar";
import SkillsSection from "./pages/SkillsSection";
import Footer from "./components/Footer";
import ContactSection from "./pages/ContactSection";
import { Toaster } from "react-hot-toast";
import ServiceSection from "./pages/ServiceSection";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <SkillsSection /> */}
      <ServiceSection />
      <ContactSection />
      <Footer />
      <Toaster className="top-right" />
    </>
  );
};

export default App;
