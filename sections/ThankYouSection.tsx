"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaHome,
  FaTruck,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import site, { type MoverNewThankYouData } from "@/data/index";

const iconMap: Record<string, React.ElementType> = {
  truck: FaTruck,
  clock: FaClock,
  shield: FaShieldAlt,
};

interface ThankYouSectionProps {
  data?: MoverNewThankYouData;
}

export default function ThankYouSection({ data: propData }: ThankYouSectionProps = {}) {
  const data = propData || site.thankYou;
  const { eyebrow, title, subtitle, features, supportCard, buttons } = data;

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D89B33]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#D89B33]/10 border-2 border-[#D89B33]/30 flex items-center justify-center text-[#D89B33] text-4xl sm:text-5xl shadow-lg shadow-[#D89B33]/10 mb-6"
        >
          <FaCheckCircle />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D89B33]/10 border border-[#D89B33]/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D89B33]" />
          <span className="text-[#D89B33] text-xs font-bold uppercase tracking-widest">
            {eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight max-w-3xl mx-auto"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>

        {/* Grid */}
        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left"
          >
            {features.map((item, idx) => {
              const Icon = iconMap[item.icon] || FaTruck;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 hover:border-[#D89B33]/50 transition-all hover:shadow-lg shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FDFBF7] border border-gray-200/80 group-hover:border-[#D89B33]/40 flex items-center justify-center text-[#D89B33] text-xl mb-4 transition-colors">
                    <Icon />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">{item.description}</p>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Support */}
        {supportCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="text-left">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {supportCard.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 font-sans">
                {supportCard.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={supportCard.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D89B33] hover:bg-[#b88022] text-white font-bold text-sm transition-colors shadow-md"
              >
                <FaPhoneAlt className="text-xs" />
                <span>{supportCard.phone}</span>
              </a>
              <a
                href={supportCard.emailHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/15"
              >
                <FaEnvelope className="text-sm" />
                <span>{supportCard.email}</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          {buttons?.home && (
            <Link
              href={buttons.home.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D89B33] hover:bg-[#b88022] text-white font-bold text-sm transition-all shadow-md shadow-[#D89B33]/20"
            >
              <FaHome className="text-base" />
              <span>{buttons.home.text}</span>
            </Link>
          )}
          {buttons?.services && (
            <Link
              href={buttons.services.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-bold text-sm transition-all shadow-xs"
            >
              <span>{buttons.services.text}</span>
              <FaArrowRight className="text-sm text-[#D89B33]" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}