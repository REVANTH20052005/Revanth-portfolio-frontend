"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { useWindowSize } from "react-use"; // ✅ for screen size

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [showConfetti, setShowConfetti] = useState(false);

  // ✅ Get screen width/height for Confetti
  const { width, height } = useWindowSize();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const loadingToast = toast.loading(" Sending your message...", {
      style: {
        background: "#0065b3",
        color: "#fff",
        fontWeight: "600",
        borderRadius: "10px",
        padding: "16px",
      },
    });

    try {
      const response = await fetch("https://revanth-portfolio-backend.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });


      const data = await response.json();

      if (data.success) {
        setStatus("success");
        toast.success(" Message sent successfully!", { id: loadingToast });

        setFormData({ name: "", email: "", message: "" });

        // 🎉 Show confetti
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);

        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("idle");
        toast.error(" Failed to send message.", { id: loadingToast });
      }
    } catch (err) {
      console.error(err);
      setStatus("idle");
      toast.error(" Something went wrong. Please try again.", {
        id: loadingToast,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rv1616@srmist.edu.in",
      href: "mailto:rv1616@srmist.edu.in",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7418479223",
      href: "tel:+917418479223",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ramapuram, Chennai",
      href: "https://www.google.com/maps/place/Ramapuram,+Chennai,+Tamil+Nadu",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/REVANTH20052005",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/revanth-venkatesh/",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Streamlit",
      href: "https://suck-me-baby.streamlit.app/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-slate-100 relative overflow-hidden"
    >
      {/* 🎉 Confetti on success */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-900 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-900 rounded-full translate-y-40 -translate-x-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Let's <span className="text-[#0065b3]">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
          <p className="text-xl text-navy-800 max-w-3xl mx-auto font-medium">
            Ready to bring your ideas to life? Let's discuss how we can create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-navy-900 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-transparent transition-all duration-300 group hover:shadow-[0_0_20px_#0065b3] hover:border-[#0065b3]"
                >
                  <div className="text-navy-900 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-navy-600 font-medium">
                      {info.label}
                    </div>
                    <div className="text-navy-900 font-semibold">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-navy-900 mb-6">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-900 text-csk-yellow p-4 rounded-xl hover:bg-navy-800 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:ring-2 focus:ring-[#0065b3] hover:shadow-[0_0_15px_#0065b3]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-navy-100">
            <h3 className="text-3xl font-bold text-navy-900 mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-[#0065b3] hover:shadow-[0_0_15px_#0065b3]"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-[#0065b3] hover:shadow-[0_0_15px_#0065b3]"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:ring-2 focus:ring-[#0065b3] resize-none hover:shadow-[0_0_15px_#0065b3]"
                required
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-navy-900 text-csk-yellow px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_#FFD700] flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={20} className="text-csk-yellow" />
                      Send Message
                    </motion.div>
                  )}
                  {status === "sending" && (
                    <motion.div
                      key="sending"
                      className="flex items-center gap-2"
                      animate={{ x: [0, 100, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Send size={22} className="text-csk-yellow" />
                      Sending...
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-500 font-bold"
                    >
                      Sent!
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
