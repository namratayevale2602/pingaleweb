"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Update your imports to use string paths or fix the image imports
const CalculatorCard = ({
  icon,
  title,
  description,
  isHovered,
  onHover,
  link,
}) => {
  return (
    <Link href={`/calculators/${link}`} className="block">
      <motion.div
        className={`p-6 rounded-lg shadow-md bg-white cursor-pointer transition-all duration-300 border-2 ${
          isHovered ? "border-green-100" : "border-transparent"
        }`}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        onHoverStart={onHover}
        onHoverEnd={onHover}
      >
        <div className="flex items-center mb-4">
          {/* Use Next.js Image component */}
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
};

const Calculators = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const calculators = [
    {
      id: "future-wealth",
      title: "Future Wealth",
      description: "Calculate your potential future wealth based on current investments and regular contributions.",
      icon: "/calculator/ppf.png", // Use string path or fix your imports
      link: "future-wealth",
    },
    {
      id: "sip",
      title: "SIP",
      description: "Plan your SIP amount based on your investment horizon.",
      icon: "/calculator/sip.png",
      link: "sip",
    },
    {
      id: "swp",
      title: "SWP",
      description: "Determine monthly income from the Systematic Withdrawal Plan.",
      icon: "/calculator/swp.png",
      link: "swp",
    },
    {
      id: "goal",
      title: "Goal",
      description: "Calculate the amount needed to achieve your financial goals.",
      icon: "/calculator/fd.png",
      link: "goal",
    },
    {
      id: "home-loan-recovery",
      title: "Home Loan Recovery",
      description: "Plan your home loan recovery strategy.",
      icon: "/calculator/inflation.png",
      link: "home-loan-recovery",
    },
    {
      id: "retirement-corpus",
      title: "Retirement Corpus",
      description: "Calculate the corpus needed for your retirement.",
      icon: "/calculator/cagr.png",
      link: "retirement-corpus",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Calculators</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {calculators.map((calc) => (
            <CalculatorCard
              key={calc.id}
              icon={calc.icon}
              title={calc.title}
              link={calc.link}
              description={calc.description}
              isHovered={hoveredCard === calc.id}
              onHover={() =>
                setHoveredCard(hoveredCard === calc.id ? null : calc.id)
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Calculators;