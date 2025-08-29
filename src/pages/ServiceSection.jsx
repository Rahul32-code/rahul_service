import React from "react";
import {
  LayoutDashboard,
  Smartphone,
  ShoppingCart,
  Store,
  Server,
  Database,
  CalendarCheck2,
  GraduationCap,
  FileText,
  Users,
  MessageCircle,
  HelpCircle,
  Briefcase,
  Utensils,
  Layers,
  ClipboardCheck,
  Wallet,
} from "lucide-react";

// 🟦 Featured Services (Main Cards)
const featuredServices = [
  {
    name: "Landing Page",
    desc: "High-converting single-page marketing sites.",
    icon: <LayoutDashboard size={32} className="text-teal-500" />,
  },
  {
    name: "Responsive Website",
    desc: "Pixel-perfect across all screen sizes.",
    icon: <Smartphone size={32} className="text-teal-500" />,
  },
  {
    name: "Single-vendor E-commerce",
    desc: "Online store for a single seller.",
    icon: <ShoppingCart size={32} className="text-teal-500" />,
  },
  {
    name: "Multi-vendor E-commerce",
    desc: "Marketplace like Amazon or Flipkart.",
    icon: <Store size={32} className="text-teal-500" />,
  },
  {
    name: "RESTful API",
    desc: "Make a fast, scalable APIs for frontend.",
    icon: <Server size={32} className="text-teal-500" />,
  },
  {
    name: "Custom CRM",
    desc: "Leads, customers, sales tracking for businesses.",
    icon: <Users size={32} className="text-teal-400" />,
  },
  {
    name: "Online Booking System",
    desc: "Booking system for salons, doctors, or hotels.",
    icon: <CalendarCheck2 size={32} className="text-teal-400" />,
  },
  {
    name: "Learning Management System",
    desc: "Course selling, student progress tracking.",
    icon: <GraduationCap size={32} className="text-teal-400" />,
  },
  {
    name: "Bloging website",
    desc: "Course selling, student progress tracking.",
    icon: <GraduationCap size={32} className="text-teal-400" />,
  },
  {
    name: "Admin Dashboards Backend",
    desc: "Total users, revenue, daily active users",
    icon: <GraduationCap size={32} className="text-teal-400" />,
  },
  {
    name: "Email Notifications / OTP / SMS",
    desc: "Total users, revenue, daily active users",
    icon: <GraduationCap size={32} className="text-teal-400" />,
  },
];


const ServicesSection = () => {
  return (
    <section id="services" className="container px-6 mx-auto my-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-bold mb-4">
          My{" "}
          <span className="text-teal-500 text-shadow-[0_0_15px_rgba(13,148,136,0.4)]">
            Services
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I help businesses and individuals build smart digital products —
          whether you're launching a startup, scaling a store, or need backend architecture.
        </p>
      </div>

      {/* Featured Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredServices.map(({ name, desc, icon }, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/20 text-white p-6 rounded-lg shadow-md backdrop-blur-md hover:shadow-[0_0_15px_rgba(13,148,136,0.5)] hover:border-teal-500 hover:text-teal-400 transition duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h4 className="text-lg font-semibold mb-2">{name}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Custom Services */}
    </section>
  );
};

export default ServicesSection;
