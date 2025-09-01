import React, { useState } from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: (
      <PhoneCall
        size={24}
        color="currentColor"
        className="text-teal-600 animate-pulse transition duration-300"
      />
    ),
    label: "Phone",
    value: "+91 9625 9687 93",
    href: "tel:+919625968793",
  },
  {
    icon: (
      <Mail
        size={24}
        color="currentColor"
        className="text-teal-600 animate-pulse transition duration-300"
      />
    ),
    label: "Email",
    value: "hello@yourdomain.com",
    href: "mailto:hello@yourdomain.com",
  },
  {
    icon: (
      <MapPin
        size={24}
        color="currentColor"
        className="text-teal-600 animate-pulse transition duration-300"
      />
    ),
    label: "Address",
    value: "123 Creative Street, Innovation City, NY 10101",
    href: "https://goo.gl/maps/your-location",
  },
];

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fixed typo

    const { name, email, phone, message } = form;

    if (!name || !email || !phone || !message) {
      toast.error("Please Fill All Fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Enter a valid 10-digit Indian phone number.");
      return;
    }

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      setIsSending(true);

      const loadingToast = toast.loading("Sending...");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      toast.dismiss(loadingToast);

      if (!data.success) {
        toast.error(data.message || "Submission failed.");
        return;
      }

      toast.success("Message sent successfully! 🚀");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <section className="container px-6 mx-auto my-16" id="contact">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-teal-500">
          Let's Connect and Create Something Amazing!
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          We’re here to help. Reach out to us with any questions or ideas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Contact Info Left */}
        <div className="w-full md:w-1/2 border border-gray-500 rounded-lg p-8 shadow-md">
          <h4 className="text-2xl font-semibold text-teal-600 mb-6">
            Contact Information
          </h4>
          <ul className="space-y-5 text-gray-300">
            {contactInfo.map(({ icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                {icon}
                <div>
                  <p className="font-medium">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-teal-600 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form Right */}
        <div className="w-full md:w-1/2 bg-white/10 border border-gray-600 rounded-lg shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-teal-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:block hidden"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-teal-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:block hidden"
              >
                Your Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // only digits
                  setForm({ ...form, phone: value });
                }}
                maxLength={10}
                placeholder="+91 123 4567 7890"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-teal-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:block hidden"
              >
                +91 123 4567 7890
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-teal-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:block hidden"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
