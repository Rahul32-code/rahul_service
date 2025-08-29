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
    desc: "Secure and scalable API development.",
    icon: <Server size={32} className="text-teal-500" />,
  },
];

// 🟨 Custom Services
const servicesYouCanBuild = [
  {
    name: "Custom CRM",
    desc: "Leads, customers, sales tracking for businesses.",
    icon: <Users size={20} className="text-teal-400" />,
  },
  {
    name: "Inventory Management",
    desc: "Stock tracking for shops and warehouses.",
    icon: <Database size={20} className="text-teal-400" />,
  },
  {
    name: "Online Booking System",
    desc: "Booking system for salons, doctors, or hotels.",
    icon: <CalendarCheck2 size={20} className="text-teal-400" />,
  },
  {
    name: "Learning Management System",
    desc: "Course selling, student progress tracking.",
    icon: <GraduationCap size={20} className="text-teal-400" />,
  },
  {
    name: "Multi-vendor E-commerce Platform",
    desc: "Like Amazon, sellers list & sell products.",
    icon: <Store size={20} className="text-teal-400" />,
  },
  {
    name: "Invoice & Billing System",
    desc: "Create and track invoices, send reminders.",
    icon: <FileText size={20} className="text-teal-400" />,
  },
  {
    name: "Project Management Tool",
    desc: "Manage tasks, deadlines, and teamwork.",
    icon: <ClipboardCheck size={20} className="text-teal-400" />,
  },
  {
    name: "Real-time Chat App",
    desc: "Messaging platform like WhatsApp.",
    icon: <MessageCircle size={20} className="text-teal-400" />,
  },
  {
    name: "Support Ticketing System",
    desc: "Customers can raise issues via tickets.",
    icon: <HelpCircle size={20} className="text-teal-400" />,
  },
  {
    name: "Portfolio / Website Builder",
    desc: "Drag & drop site builder (SaaS-style).",
    icon: <LayoutDashboard size={20} className="text-teal-400" />,
  },
  {
    name: "Job Board Platform",
    desc: "Employers post jobs, applicants apply.",
    icon: <Briefcase size={20} className="text-teal-400" />,
  },
  {
    name: "Food Delivery Backend",
    desc: "Backend for restaurants, delivery, users.",
    icon: <Utensils size={20} className="text-teal-400" />,
  },
  {
    name: "Multi-tenant SaaS Boilerplate",
    desc: "Multiple clients on one platform.",
    icon: <Layers size={20} className="text-teal-400" />,
  },
  {
    name: "Custom CMS",
    desc: "Clients manage their own content easily.",
    icon: <LayoutDashboard size={20} className="text-teal-400" />,
  },
  {
    name: "Subscription Billing System",
    desc: "Stripe-based SaaS billing & subscriptions.",
    icon: <Wallet size={20} className="text-teal-400" />,
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
      <div>
        <h3 className="text-white text-2xl font-bold mb-6 border-b border-white/20 pb-2">
          Custom Solutions I Can Build For You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesYouCanBuild.map(({ name, desc, icon }, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 text-white p-5 rounded-md shadow-sm hover:border-teal-400 hover:shadow-[0_0_10px_rgba(13,148,136,0.3)] transition duration-300 flex gap-4 items-start"
            >
              <div className="mt-1">{icon}</div>
              <div>
                <h5 className="font-semibold text-teal-400 mb-1">{name}</h5>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
