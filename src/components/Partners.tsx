"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// 导入图片
import animocaLogo from "@/assets/logos/animoca.png";
import openCampusLogo from "@/assets/logos/openCampus.png";
import openbuildLogo from "@/assets/logos/openbuild.svg";
import socialLayerLogo from "@/assets/logos/social_layer.svg";
import superfluidLogo from "@/assets/logos/superfluid.jpeg";
import bewaterLogo from "@/assets/logos/bewater.jpeg";
import cosetLogo from "@/assets/logos/coset.svg";
import virtualsLogo from "@/assets/logos/virtuals.svg";

export default function Partners() {
  const partners = [
    { img: animocaLogo, name: "Animoca Brands" },
    { img: openCampusLogo, name: "OpenCampus" },
    { img: openbuildLogo, name: "Openbuild" },
    { img: socialLayerLogo, name: "SocialLayer" },
    { img: superfluidLogo, name: "Superfluid" },
    { img: virtualsLogo, name: "Virtuals" },
    { img: bewaterLogo, name: "Bewater" },
    { img: cosetLogo, name: "Coset" },
  ];

  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="bg-[#252525] text-[#c05cf6] text-lg font-medium border border-[#252525] rounded-full px-4 py-2 w-fit mx-auto">
            Our Partners
          </div>
          <div className="text-gray-400  max-w-2xl mx-auto mt-4">
            We’re proud to be supported by leading Web3 ecosystems and
            innovation platforms that share our vision of open collaboration and
            decentralized development.
          </div>
        </motion.div>

        {/* 合作伙伴滚动条 */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex space-x-12 min-w-max"
            >
              {/* 重复两次以实现无缝滚动 */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 glass-effect rounded-lg px-8 py-6  min-w-[200px] text-center"
                >
                  <Image
                    className="max-h-16 max-w-full"
                    src={partner.img}
                    alt={partner.name}
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 渐变蒙版 */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
