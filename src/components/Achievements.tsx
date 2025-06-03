"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      emoji: "🥈",
      title: "ETH Beijing",
      description: "Second Prize in Public Goods Track",
      year: "2025",
    },
    {
      emoji: "🥇",
      title: "Mina Mini Hackathon",
      description: "First Prize",
      year: "2025",
    },
    {
      emoji: "🏆",
      title: "AI Agent HK",
      description: "Best Flow Plugin to Existing AI Agent Frameworks",
      year: "2025",
    },
    {
      emoji: "🔟",
      title: "Virtuals Protocol Hackathon",
      description: "Top 10 Project",
      year: "2025",
    },
    {
      emoji: "🏅",
      title: "BNB AI Hack",
      description: "Tier 4",
      year: "2025",
    },
    {
      emoji: "✅",
      title: "Superfluid Frontier Guild Season 3",
      description: "Selected Project",
      year: "2025",
    },
    {
      emoji: "🥇",
      title: "Scroll City Cup Hackathon",
      description: "First Prize",
      year: "2024",
    },
    {
      emoji: "🥈",
      title: "ETH Shenzhen",
      description: "Second Prize",
      year: "2024",
    },
    {
      emoji: "🏅",
      title: "EDU Chain Hackathon: Semester 1",
      description: "Fourth Place",
      year: "2024",
    },
    {
      emoji: "🏆",
      title: "NeoX Grind Hackathon (HackQuest Edition)",
      description: "Winner",
      year: "2024",
    },
    {
      emoji: "🏆",
      title: "Superfluid Hacker House",
      description: "Winner",
      year: "2024",
    },
    {
      emoji: "🎯",
      title: "Polkadot Bangkok Hackathon",
      description: "Finalist",
      year: "2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-[#252525] text-[#c05cf6] text-lg font-medium border border-[#252525] rounded-full px-4 py-2 w-fit mx-auto">
            Hackathon Achievements
          </div>
          <p className="text-gray-400 text-lg max-w-2xl  mt-4 mx-auto">
            Proven success in top Web3 hackathons worldwide, with multiple first
            prizes and finalist spots.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
        >
          <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 transition-colors">
            <div className="space-y-6 pr-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-between py-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300 rounded-lg px-6"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-2xl">{achievement.emoji}</div>
                    <div>
                      <h4 className="text-white text-lg font-semibold">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400 text-lg font-medium">
                    {achievement.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
