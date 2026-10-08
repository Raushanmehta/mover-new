"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
    FaCalendarAlt,
    FaRegClock,
    FaChevronDown,
    FaUserCheck,
    FaReceipt,
    FaUsers,
    FaClock,
    FaQuoteLeft,
    FaGem,
    FaCoins,
    FaClipboardList,
    FaHeadset,
} from "react-icons/fa";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    fadeInUp,
    cardVariants,
    buttonHoverTap,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

const iconMap: Record<string, React.ElementType> = {
    FaUserCheck,
    FaReceipt,
    FaUsers,
    FaClock,
    FaGem,
    FaCoins,
    FaClipboardList,
    FaHeadset,
};

interface GetAQuoteSectionProps {
    data?: typeof site.getAQuote;
}

export default function GetAQuoteSection({ data: propData }: GetAQuoteSectionProps = {}) {
    const data = propData || site.getAQuote;

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        service: "",
        requirements: "",
        date: "",
        time: "",
        referralSource: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote Request Submitted:", formData);
        alert("Thank you! We have received your request and will get back to you shortly.");
    };

    return (
        <section className="w-full bg-[#FAF9F6] py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-4">

                {/* Top 2-Column Grid */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
                >

                    {/* Left Column: Form Section */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-7 bg-[#F7F5F0] p-4 sm:p-6 border border-gray-200/60 flex flex-col justify-between"
                    >
                        <div>
                            {/* Sub-heading */}
                            <motion.div
                                variants={subtitleVariants}
                                className="flex items-center gap-2 text-[#D89B33] mb-1"
                            >
                                <span className="w-8 h-[1.5px] bg-[#D89B33]" />
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase">
                                    {data.subtitle}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={titleVariants}
                                className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-1"
                            >
                                {data.title}{" "}
                                <span className="text-[#D89B33]">{data.titleHighlight}</span>{" "}
                                {data.titleSuffix}
                            </motion.h2>

                            <motion.p
                                variants={descVariants}
                                className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4"
                            >
                                {data.description}
                            </motion.p>

                            {/* Quote Request Form */}
                            <form onSubmit={handleSubmit} className="space-y-3">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
                                    />

                                    {/* Phone Number */}
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Phone Number *"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <input
                                        type="email"
                                        required
                                        placeholder="Email Address *"
                                        value={formData.emailAddress}
                                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
                                    />

                                    {/* Select Service */}
                                    <div className="relative">
                                        <select
                                            required
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#D89B33] transition-colors cursor-pointer"
                                        >
                                            <option value="" disabled>Select Service *</option>
                                            {data.serviceOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                    </div>
                                </div>

                                {/* Requirements Textarea */}
                                <textarea
                                    rows={3}
                                    placeholder="Tell us about your requirements (Optional)"
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                    className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#D89B33] transition-colors resize-none"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Preferred Date */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                            placeholder="Preferred Date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#D89B33] transition-colors"
                                        />
                                        <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                    </div>

                                    {/* Preferred Time */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            onFocus={(e) => (e.target.type = "time")}
                                            onBlur={(e) => (e.target.type = "text")}
                                            placeholder="Preferred Time"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-[#D89B33] transition-colors"
                                        />
                                        <FaRegClock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                    </div>
                                </div>

                                {/* Referral Dropdown */}
                                <div className="relative">
                                    <select
                                        value={formData.referralSource}
                                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2.5 text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#D89B33] transition-colors cursor-pointer"
                                    >
                                        <option value="" disabled>How did you hear about us?</option>
                                        {data.referralOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                    <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={buttonHoverTap.hover}
                                    whileTap={buttonHoverTap.tap}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold py-3 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer mt-4"
                                >
                                    <span>{data.submitButtonText}</span>
                                    <HiArrowRight className="text-lg" />
                                </motion.button>

                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column: Showcase Card */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-5 relative overflow-hidden min-h-[500px] flex flex-col justify-between p-4 sm:p-6 text-white shadow-xl bg-gray-950 group"
                    >
                        {/* Background Model Photo */}
                        <Image
                            src={data.showcaseCard.image}
                            alt={data.showcaseCard.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Top Content */}
                        <div className="relative z-20 flex flex-col gap-1">

                            {/* Sub-heading */}
                            <motion.div
                                variants={subtitleVariants}
                                className="flex items-center gap-2 text-[#D89B33]"
                            >
                                <span className="w-8 h-[1.5px] bg-[#D89B33]" />
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase">
                                    {data.showcaseCard.subtitle}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                variants={titleVariants}
                                className="font-serif text-3xl sm:text-4xl font-bold leading-tight whitespace-pre-line"
                            >
                                {data.showcaseCard.title}
                            </motion.h3>

                            {/* Feature List */}
                            <motion.div
                                variants={staggerContainer(0.08)}
                                className="space-y-4 pt-2"
                            >
                                {data.showcaseCard.features.map((feat, idx) => {
                                    const IconComponent = iconMap[feat.icon] || FaUserCheck;
                                    return (
                                        <motion.div
                                            key={idx}
                                            variants={fadeInUp}
                                            className="flex items-center gap-4"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 6 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                                className="w-12 h-12 rounded-full bg-white/90 text-gray-950 flex items-center justify-center shrink-0 shadow cursor-pointer"
                                            >
                                                <IconComponent className="h-5 w-5 text-[#B87A1E]" />
                                            </motion.div>
                                            <span className="text-xs sm:text-sm font-medium text-gray-100">
                                                {feat.text}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Bottom Translucent Quote Box */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative z-20 mt-8 p-5 ml-42 flex items-start gap-3"
                        >
                            <FaQuoteLeft className="text-[#D89B33] text-2xl shrink-0 mt-1" />
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm italic leading-relaxed text-gray-200">
                                    {data.showcaseCard.quote}
                                </p>
                                <span className="block w-6 h-[1.5px] bg-[#D89B33] mt-2" />
                            </div>
                        </motion.div>

                    </motion.div>

                </motion.div>

                {/* Bottom 4-Column Value Proposition Grid */}
                <motion.div
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-gray-200/60"
                >
                    {data.valuePropositions.map((prop, idx) => {
                        const IconComponent = iconMap[prop.icon] || FaGem;
                        const borderClass =
                            idx < 3
                                ? "lg:border-r lg:border-gray-200/80 " + (idx === 0 ? "lg:pr-6" : "lg:px-6")
                                : "lg:pl-6";

                        return (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className={`flex flex-col items-center text-center ${borderClass}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.12, rotate: 6 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="w-14 h-14 rounded-full bg-amber-100/70 border border-[#D89B33]/30 flex items-center justify-center text-[#B87A1E] mb-1 shadow-sm cursor-pointer"
                                >
                                    <IconComponent className="text-2xl" />
                                </motion.div>
                                <h4 className="font-serif text-lg font-bold text-gray-900">
                                    {prop.title}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {prop.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}