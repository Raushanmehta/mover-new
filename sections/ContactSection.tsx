"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaRegClock,
    FaCalendarAlt,
    FaChevronDown,
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

interface ContactSectionProps {
    data?: typeof site.contact;
}

export default function ContactSection({ data: propData }: ContactSectionProps = {}) {
    const data = propData || site.contact;
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you! Your appointment request has been submitted.");
    };

    return (
        <section className="w-full bg-white py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-4">

                {/* Top 3-Column Container */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
                >

                    {/* Card 1: Contact Information */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-4 bg-[#F7F5F0] p-4 sm:p-6 border border-gray-200/60 flex flex-col justify-between"
                    >
                        <div>
                            {/* Sub-heading */}
                            <motion.div
                                variants={subtitleVariants}
                                className="flex items-center gap-2 text-[#D89B33] mb-1"
                            >
                                <span className="w-8 h-[1.5px] bg-[#D89B33]" />
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase">
                                    {data.infoCard.subtitle}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={titleVariants}
                                className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-1"
                            >
                                {data.infoCard.title}
                            </motion.h2>

                            <motion.p
                                variants={descVariants}
                                className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4"
                            >
                                {data.infoCard.description}
                            </motion.p>

                            {/* Contact Items List */}
                            <motion.div
                                variants={staggerContainer(0.08)}
                                className="space-y-3"
                            >

                                {/* Location */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="flex items-start gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 cursor-pointer"
                                    >
                                        <FaMapMarkerAlt className="h-5 w-5" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {data.infoCard.location.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                            {data.infoCard.location.address}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="flex items-start gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 cursor-pointer"
                                    >
                                        <FaPhoneAlt className="h-5 w-5" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {data.infoCard.phone.title}
                                        </h3>
                                        <a href={data.infoCard.phone.href} className="text-gray-600 text-xs sm:text-sm hover:text-[#D89B33] transition-colors">
                                            {data.infoCard.phone.number}
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="flex items-start gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 cursor-pointer"
                                    >
                                        <FaEnvelope className="h-5 w-5" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {data.infoCard.email.title}
                                        </h3>
                                        <a href={data.infoCard.email.href} className="text-gray-600 text-xs sm:text-sm hover:text-[#D89B33] transition-colors">
                                            {data.infoCard.email.address}
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Hours */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="flex items-start gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5 cursor-pointer"
                                    >
                                        <FaRegClock className="h-5 w-5" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {data.infoCard.hours.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                            {data.infoCard.hours.text}
                                        </p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Appointment form */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-5 bg-[#F7F5F0] p-4 sm:p-6 border border-gray-200/60 flex flex-col justify-between"
                    >
                        <div>
                            {/* Sub-heading */}
                            <motion.div
                                variants={subtitleVariants}
                                className="flex items-center gap-2 text-[#D89B33] mb-1"
                            >
                                <span className="w-8 h-[1.5px] bg-[#D89B33]" />
                                <span className="text-xs lg:text-sm font-bold tracking-[0.2em] uppercase">
                                    {data.formCard.subtitle}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={titleVariants}
                                className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-1"
                            >
                                {data.formCard.title}
                            </motion.h2>

                            <motion.p
                                variants={descVariants}
                                className="text-gray-600 text-xs sm:text-sm mb-4"
                            >
                                {data.formCard.description}
                            </motion.p>

                            {/* Form Elements */}
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
                                    />

                                    {/* Phone Number */}
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Phone Number *"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="w-full bg-white border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
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
                                        className="w-full bg-white border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#D89B33] transition-colors"
                                    />

                                    {/* Select Service Dropdown */}
                                    <div className="relative">
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full bg-white border border-gray-200 px-4 py-2 text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#D89B33] transition-colors cursor-pointer"
                                        >
                                            <option value="" disabled>Select Service</option>
                                            {data.formCard.serviceOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                    </div>
                                </div>

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
                                            className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-[#D89B33] transition-colors"
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
                                            className="w-full bg-white border border-gray-200 px-4 py-2 text-sm text-gray-600 focus:outline-none focus:border-[#D89B33] transition-colors"
                                        />
                                        <FaRegClock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <textarea
                                    rows={4}
                                    placeholder="Your Message (Optional)"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#D89B33] transition-colors resize-none"
                                />

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={buttonHoverTap.hover}
                                    whileTap={buttonHoverTap.tap}
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold py-2.5 shadow-md hover:shadow-lg transition-all text-sm sm:text-base cursor-pointer"
                                >
                                    <span>{data.formCard.submitButtonText}</span>
                                    <HiArrowRight className="text-lg" />
                                </motion.button>

                            </form>
                        </div>
                    </motion.div>

                    {/* Showcase card */}
                    <motion.div
                        variants={cardVariants}
                        className="lg:col-span-3 relative overflow-hidden min-h-[420px] flex flex-col justify-end p-4 sm:p-6 text-white shadow-lg group"
                    >
                        {/* Background image */}
                        <Image
                            src={data.showcaseCard.image}
                            alt={data.showcaseCard.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="relative z-20 flex flex-col gap-2">
                            {/* Sub-heading */}
                            <motion.div
                                variants={subtitleVariants}
                                className="flex items-center gap-2 text-[#D89B33]"
                            >
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                                    {data.showcaseCard.subtitle}
                                </span>
                                <span className="w-8 h-[1.5px] bg-[#D89B33]" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                variants={titleVariants}
                                className="font-serif text-2xl sm:text-3xl font-bold leading-tight"
                            >
                                {data.showcaseCard.title}
                            </motion.h3>

                            {/* Body Text */}
                            <motion.p
                                variants={descVariants}
                                className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                            >
                                {data.showcaseCard.description}
                            </motion.p>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Bottom Map Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="relative w-full h-[260px] sm:h-[260px] overflow-hidden border border-gray-200/80 shadow-sm bg-gray-100"
                >
                    {/* Google Map Embedded Iframe */}
                    <iframe
                        src={data.mapUrl}
                        title="Salon Location Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />
                </motion.div>

            </div>
        </section>
    );
}