import { HeartPlus } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-6 mt-10">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] text-white text-center py-6">
        <p className="text-sm md:text-base font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-teal-400 font-semibold text-glow-pulse-teal">
            Rahul
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
