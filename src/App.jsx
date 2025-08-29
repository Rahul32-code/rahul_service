import React from "react";
import Navbar from "./components/Navbar";
import SkillsSection from "./pages/SkillsSection";
import Footer from "./components/Footer";
import ContactSection from "./pages/ContactSection";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <Toaster className="top-right" />
    </>
  );
};

export default App;
