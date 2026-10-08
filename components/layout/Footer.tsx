"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaRegClock,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import site from "@/data/index";
import {
    footerContainerVariants,
    footerColumnVariants,
    footerItemVariants,
    footerSocialIconVariants,
    lineExpandVariants,
    buttonHoverTap,
    defaultViewport,
} from "@/utils/animations";

const socialIconMap: Record<string, React.ElementType> = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
};

export default function Footer() {
    const data = site.footer;

    return (
        <footer className="w-full bg-[#0B0C10] text-[#E0E0E0] pt-14 md:pt-16 pb-8 border-t border-[#C58A2B]/30 font-sans relative overflow-hidden">

            {/* Top Main Section with 12-Column Responsive Grid */}
            <motion.div
                variants={footerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-y-10 lg:gap-y-0 pb-12 md:pb-14"
            >

                {/* Column 1: Brand / Logo & About */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-2 md:col-span-6 lg:col-span-3 flex flex-col justify-between space-y-5 lg:pr-6 xl:pr-8 lg:border-r lg:border-[#C58A2B]/20"
                >
                    <div className="space-y-4">
                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <Image
                                src={data.logo.src}
                                alt={data.logo.alt}
                                width={data.logo.width}
                                height={data.logo.height}
                                priority
                                className="w-42 h-20 object-contain"
                            />
                        </Link>

                        {/* Description */}
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-300 pr-2">
                            {data.description}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                        {data.socialLinks.map((social, index) => {
                            const IconComponent = socialIconMap[social.platform] || FaInstagram;
                            return (
                                <motion.a
                                    key={index}
                                    variants={footerSocialIconVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgba(216, 155, 51, 0.2)",
                                        borderColor: "#D89B33",
                                        color: "#D89B33",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border border-[#C58A2B]/50 flex items-center justify-center text-white transition-all shadow-md shrink-0 cursor-pointer"
                                >
                                    <IconComponent className="w-5 h-5 shrink-0" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-3 lg:col-span-2 flex flex-col space-y-4 lg:px-4 xl:px-6 lg:border-r lg:border-[#C58A2B]/20"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Quick Links
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#D89B33]"
                        />
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                        {data.quickLinks.map((link, idx) => (
                            <motion.li key={idx} variants={footerItemVariants}>
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 hover:text-[#D89B33] transition-colors text-gray-300"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#D89B33] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                                        {link.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Column 3: Our Services */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-3 lg:col-span-2 flex flex-col space-y-4 lg:px-4 xl:px-6 lg:border-r lg:border-[#C58A2B]/20"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Our Services
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#D89B33]"
                        />
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                        {data.serviceLinks.map((service, idx) => (
                            <motion.li key={idx} variants={footerItemVariants}>
                                <Link
                                    href={service.href}
                                    className="group inline-flex items-center gap-2 hover:text-[#D89B33] transition-colors text-gray-300"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#D89B33] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                                        {service.name}
                                    </span>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Column 4: Contact Us */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-6 lg:col-span-3 flex flex-col space-y-4 lg:px-4 xl:px-6 lg:border-r lg:border-[#C58A2B]/20"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            Contact Us
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#D89B33]"
                        />
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                        {/* Address */}
                        <motion.div variants={footerItemVariants} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C58A2B] flex items-center justify-center text-[#C58A2B] shrink-0 shadow-sm mt-0.5">
                                <FaMapMarkerAlt className="w-5 h-5 shrink-0" />
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                {data.contactInfo.address}
                            </p>
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={footerItemVariants} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C58A2B] flex items-center justify-center text-[#C58A2B] shrink-0 shadow-sm">
                                <FaPhoneAlt className="w-5 h-5 shrink-0" />
                            </div>
                            <a href={data.contactInfo.phoneHref} className="text-xs sm:text-sm hover:text-[#D89B33] transition-colors whitespace-nowrap">
                                {data.contactInfo.phone}
                            </a>
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={footerItemVariants} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C58A2B] flex items-center justify-center text-[#C58A2B] shrink-0 shadow-sm">
                                <FaEnvelope className="w-5 h-5 shrink-0" />
                            </div>
                            <a href={data.contactInfo.emailHref} className="text-xs sm:text-sm hover:text-[#D89B33] transition-colors truncate">
                                {data.contactInfo.email}
                            </a>
                        </motion.div>

                        {/* Hours */}
                        <motion.div variants={footerItemVariants} className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full border border-[#C58A2B] flex items-center justify-center text-[#C58A2B] shrink-0 shadow-sm mt-0.5">
                                <FaRegClock className="w-5 h-5 shrink-0" />
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                {data.contactInfo.workingHours}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Column 5: Get In Touch CTA */}
                <motion.div
                    variants={footerColumnVariants}
                    className="sm:col-span-1 md:col-span-6 lg:col-span-2 flex flex-col justify-start space-y-4 lg:pl-4 xl:pl-6"
                >
                    <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide">
                            {data.cta.title}
                        </h3>
                        <motion.span
                            variants={lineExpandVariants}
                            className="block h-[2px] bg-[#D89B33]"
                        />
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                        {data.cta.description}
                    </p>

                    <div className="pt-2">
                        <motion.a
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            href={data.cta.buttonHref}
                            className="group flex items-center justify-between w-full max-w-[200px] bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-5 py-3 shadow-lg hover:shadow-[#D89B33]/30 transition-all text-xs uppercase tracking-wider cursor-pointer"
                        >
                            <span>{data.cta.buttonText}</span>
                            <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </div>
                </motion.div>

            </motion.div>

            {/* Bottom Copyright & Legal Links Bar */}
            <div className="border-t border-[#C58A2B]/30 pt-6">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">

                    {/* Copyright Text */}
                    <p className="text-center sm:text-left">{data.copyright}</p>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
                        {data.legalLinks.map((legal, i) => (
                            <React.Fragment key={legal.name}>
                                <Link href={legal.href} className="hover:text-[#D89B33] transition-colors">
                                    {legal.name}
                                </Link>
                                {i < data.legalLinks.length - 1 && (
                                    <span className="h-3 w-[1px] bg-gray-600" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>

        </footer>
    );
}