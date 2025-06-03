"use client";

import { motion } from "framer-motion";
import { Code, Bot, BarChart3, Rocket, Zap, Shield, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Full-Stack Web3/Dapp Development",
      description: "Deliver full-cycle products for Web3 protocols and DAOs",
      features: [
        "Smart contract development",
        "Frontend interface design",
        "Backend API building",
        "MVP quick launch",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "0→1 AI Agent Development",
      description:
        "Build custom AI agents with memory, plugin support, and autonomous workflows",
      features: [
        "Custom agents with memory, plugin support, autonomous flow",
        "On-chain integrations (wallets, contracts, DAOs)",
        "Built using AutoGen / LangGraph / Function Calling / MCP",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "GitHub Developer Analysis",
      description: "Analyze developer contributions in GitHub repositories",
      features: [
        "Analyze developer contributions within GitHub repos",
        "Enable reputation systems, reward automation, dashboards",
        "Useful for DAOs, open-source communities, and governance tools",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
  ];

  const advantages = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Hackathon experience",
      desc: "15+ hackathon projects",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast delivery",
      desc: "From concept to MVP",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technical guarantee",
      desc: "Full-stack Web3 and AI technology stack",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DAO native",
      desc: "Deep understanding of decentralized collaboration",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
            我们的<span className="gradient-text">服务</span>
          </h2> */}
          <div className="bg-[#252525] text-[#c05cf6] text-lg font-medium border border-[#252525] rounded-full px-4 py-2 w-fit mx-auto">
            Our Services
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
            We are a DAO-native team, specializing in delivering full-stack Web3
            and AI products from scratch.
          </p>
        </motion.div>

        {/* 主要服务 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              ></div>

              <div
                className={`relative glass-effect rounded-xl p-8 h-full border ${service.borderColor} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 悬停时的发光效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 我们的优势 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            Why Choose <span className="gradient-text">YouBetDao</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {advantage.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {advantage.title}
                </h4>
                <p className="text-sm text-gray-400">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
