"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import site from "@/data/index";
import {
    navbarSlideDown,
    navItemVariants,
    mobileMenuVariants,
    mobileItemVariants,
    buttonHoverTap,
    springTransition,
} from "@/utils/animations";

export default function Navbar() {
    const data = site.navbar;
    const navItems = data.navItems;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname() || "";

    const isItemActive = (href: string) => {
        if (!pathname) return href === "/";
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <motion.nav
            variants={navbarSlideDown}
            initial="hidden"
            animate="visible"
            className="w-full bg-white backdrop-blur-md border-b border-gray-100 shadow-sm transition-all"
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/">
                    <Image
                        src={data.logo.src}
                        alt={data.logo.alt}
                        width={data.logo.width}
                        height={data.logo.height}
                        priority
                        className="w-42 h-20"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-9">
                    {navItems.map((item) => {
                        const active = isItemActive(item.href);
                        return (
                            <motion.div
                                key={item.name}
                                variants={navItemVariants}
                                whileHover={{ y: -1 }}
                                className="relative"
                            >
                                <Link
                                    href={item.href}
                                    className={`relative py-2 text-sm xl:text-base font-medium transition-colors duration-200 block ${active
                                        ? "text-[#D89B33] font-semibold"
                                        : "text-gray-800 hover:text-[#D89B33]"
                                        }`}
                                >
                                    {item.name}

                                    {/* Active Indicator Bar */}
                                    {active && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D89B33]"
                                            transition={springTransition}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Button & Mobile Toggle Container */}
                <div className="flex items-center gap-3 sm:gap-4">

                    {/* Vertical Divider */}
                    <span className="hidden lg:block h-6 w-[1px] bg-[#D89B33]/40" />

                    {/* CTA Button */}
                    <motion.a
                        whileHover={buttonHoverTap.hover}
                        whileTap={buttonHoverTap.tap}
                        href={data.ctaButton.href}
                        className="group hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-5 sm:px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-[#D89B33]/25 transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
                    >
                        <span>{data.ctaButton.text}</span>
                        <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-gray-800 hover:text-[#D89B33] transition-colors focus:outline-none"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? (
                            <HiX className="text-3xl" />
                        ) : (
                            <HiMenu className="text-3xl" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
                    >
                        <div className="space-y-1">
                            {navItems.map((item) => {
                                const active = isItemActive(item.href);
                                return (
                                    <motion.div key={item.name} variants={mobileItemVariants}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium transition-all ${active
                                                ? "text-[#D89B33] bg-[#D89B33]/10 font-semibold border-l-2 border-[#D89B33]"
                                                : "text-gray-700 hover:text-[#D89B33] hover:bg-gray-50"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            {active && (
                                                <span className="w-1.5 h-1.5 bg-[#D89B33]" />
                                            )}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile CTA */}
                        <motion.div variants={mobileItemVariants} className="pt-4 mt-2 border-t border-gray-100">
                            <motion.a
                                whileTap={buttonHoverTap.tap}
                                href={data.ctaButton.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-5 py-3 shadow text-center text-xs uppercase tracking-wider transition-all"
                            >
                                <span>{data.ctaButton.text}</span>
                                <HiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}