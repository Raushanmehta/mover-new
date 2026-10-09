"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    fadeInUp,
    buttonHoverTap,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

const MotionLink = motion.create(Link);

interface CtaSectionProps {
    data?: typeof site.cta;
}

export default function CtaSection({ data: propData }: CtaSectionProps = {}) {
    const data = propData || site.cta;

    return (
        <section className="relative w-full min-h-[380px] lg:min-h-[400px] flex items-center overflow-hidden bg-gray-950">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.bgImage}
                    alt={data.subtitle}
                    fill
                    priority
                    className="object-cover object-right lg:object-center brightness-100"
                />
                {/* Dark overlay */}
                <div className="absolute inset-y-0 left-0 w-full sm:w-4/5 md:w-3/5 lg:w-[55%] bg-gradient-to-r from-black/95 via-black/75 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Flourish arcs */}
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[#D89B33]/20 pointer-events-none z-10" />
            <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full border border-[#D89B33]/15 pointer-events-none z-10" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#D89B33]/20 pointer-events-none z-10" />
            <div className="absolute -bottom-14 -right-14 w-72 h-72 rounded-full border border-[#D89B33]/15 pointer-events-none z-10" />

            {/* Content container */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-10">
                <motion.div
                    variants={staggerContainer(0.12, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-2xl flex flex-col items-start gap-2"
                >
                    {/* Subtitle */}
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-3 text-[#D89B33]"
                    >
                        <span className="w-8 md:w-12 h-[2px] bg-[#D89B33]" />
                        <span className="font-allura text-3xl sm:text-4xl md:text-5xl tracking-wide">
                            {data.subtitle}
                        </span>
                        <span className="w-8 md:w-12 h-[2px] bg-[#D89B33]" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.15]"
                    >
                        {data.titleLine1} <br />
                        <span className="bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={descVariants}
                        className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg"
                    >
                        {data.description}
                    </motion.p>

                    {/* CTA button */}
                    <motion.div
                        variants={fadeInUp}
                        className="pt-2"
                    >
                        <MotionLink
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            href={data.ctaButton.href}
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-7 py-3.5 shadow-xl hover:shadow-[#D89B33]/30 transition-all text-sm md:text-base cursor-pointer"
                        >
                            <span>{data.ctaButton.text}</span>
                            <HiArrowRight className="text-xl transition-transform group-hover:translate-x-1.5" />
                        </MotionLink>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}