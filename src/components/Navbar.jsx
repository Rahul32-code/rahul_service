import React from "react";
import logo from "../assets/logo/logo.png";

const navItems = [
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-5 bg-transparent">
      <div className="container px-6 mx-auto relative text-sm">
        <div className="flex items-center justify-between rounded-lg backdrop-blur-lg bg-white/10  bg-opacity-60 border border-white/20 shadow-lg px-4 py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="w-25 mr-2" src={logo} alt="logo" />
          </div>

          {/* Navigation Items */}
          {/* <ul className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-slate-600 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul> */}

          {/* Contact Button */}
          <div className="flex items-center">
            <a
              href="#contact"
              className="py-2 px-4 bg-teal-600 text-white font-medium rounded-md shadow-md cursor-pointer hover:text-teal-600 hover:bg-teal-500/20 hover:border hover:border-teal-600 hover:shadow-[0_0_15px_rgba(13,148,136,0.4)] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
