"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/youbetdao",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/YoubetDao",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:contact@youbetdao.com",
      label: "Email",
      color: "hover:text-purple-400",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#partners", label: "Partners" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#achievements", label: "Achievements" },
    { href: "#services", label: "Services" },
  ];

  return (
    <footer className="relative py-16 border-t border-white/10">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center text-2xl font-bold space-x-2 mb-4">
              About Us
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              We are a research-driven DAO focused on advancing foundational
              blockchain technologies, zero-knowledge cryptography (zk), and the
              intersection of AI and Web3. Our contributors come from diverse
              backgrounds and collaborate globally to build innovative,
              open-source solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className={`flex items-center space-x-3 text-gray-400 ${social.color} transition-all duration-200 text-sm`}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} YouBetDao. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for the Web3 community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
