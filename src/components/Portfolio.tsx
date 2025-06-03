"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Brain, Shield } from "lucide-react";
import Image from "next/image";
import according from "@/assets/accordingWork.png";
import deepflow from "@/assets/deepflow.png";
import gohacker from "@/assets/goHacker.png";

export default function Portfolio() {
  const projects = [
    {
      name: "According Work",
      link: "https://according.work",
      github: "https://github.com/YoubetDao/youbet-task",
      description:
        "According Work is a platform that automates reward distribution for open-source developers. It tracks real contributions and ensures fair and transparent compensation.",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
      img: according,
    },
    {
      name: "DeepFlow",
      link: "http://superfluid-leaderboard.netlify.app/",
      github: "",
      description:
        "Advanced blockchain flow visualization and analytics platform for Web3 developers and researchers.",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20",
      img: deepflow,
    },
    {
      name: "GoHacker",
      link: "https://go-hacker-virtuals.netlify.app/",
      github: "https://github.com/YoubetDao/GoHacker",
      description:
        "GoHacker is an AI-powered GitHub agent integrated with the Agent Commerce Protocol (ACP) system, serving as a bridge between investors and developers in the web3 ecosystem.",
      icon: <Brain className="w-8 h-8 text-green-400" />,
      color: "from-green-500/20 to-emerald-500/20",
      img: gohacker,
    },
    // {
    //   name: "MCPForge",
    //   link: "",
    //   github: "https://github.com/YoubetDao/MCPForge",
    //   description:
    //     "MCPForge is a crypto-native AI Agent tool marketplace that transforms GitHub-based MCP Repos into instantly deployable, callable, and monetizable AI services.",
    //   icon: <Code className="w-8 h-8 text-orange-400" />,
    //   tags: ["AI Marketplace", "Deployment", "Monetization"],
    //   color: "from-orange-500/20 to-red-500/20",
    // },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-[#252525] text-[#c05cf6] text-lg font-medium border border-[#252525] rounded-full px-4 py-2 w-fit mx-auto">
            Our Portfolio
          </div>
          <div className="text-gray-400 max-w-2xl mx-auto mt-4">
            Our portfolio demonstrates how we fuse blockchain, zero‑knowledge
            tech, and AI to solve real Web3 problems—ranging from automated
            contributor rewards to real‑time data orchestration and AI agent
            marketplaces.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* 背景光晕效果 */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              ></div>

              {/* 主卡片 */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* 图片区域 - 占据更大空间 */}
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>

                  {/* 悬停时显示的操作按钮 */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-110"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* 项目图标 */}
                  <div className="absolute bottom-4 left-4 p-2.5 bg-white/10 backdrop-blur-md rounded-xl">
                    {project.icon}
                  </div>
                </div>

                {/* 项目信息区域 - 更紧凑 */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
