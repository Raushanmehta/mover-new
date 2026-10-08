"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import site from "@/data/index";

interface PageTopSectionProps {
    title?: string;
    breadcrumbHome?: string;
    breadcrumbCurrent?: string;
    bgImage?: string;
    data?: typeof site.pageTopSection;
}

export default function PageTopSection({
    title,
    breadcrumbHome,
    breadcrumbCurrent,
    bgImage,
    data: propData,
}: PageTopSectionProps = {}) {
    const data = propData || site.pageTopSection;
    const finalTitle = title || data.defaultTitle;
    const finalHome = breadcrumbHome || data.defaultBreadcrumbHome;
    const finalCurrent = breadcrumbCurrent || data.defaultBreadcrumbCurrent;
    const finalBg = bgImage || data.bgImage;

    return (
        <section className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden bg-gray-950">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={finalBg}
                    alt={finalTitle}
                    fill
                    priority
                    className="object-cover object-center brightness-[0.7]"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 text-center flex flex-col items-center justify-center gap-3">

                {/* Main Header Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-widest text-white uppercase"
                >
                    {finalTitle}
                </motion.h1>

                {/* Breadcrumb Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                >
                    {/* Home Link */}
                    <Link
                        href="/"
                        className="text-white hover:text-[#D89B33] underline underline-offset-4 transition-colors"
                    >
                        {finalHome}
                    </Link>

                    {/* Separator */}
                    <span className="text-gray-300 font-light px-1">/</span>

                    {/* Current Page */}
                    <span className="text-[#D89B33] font-medium">
                        {finalCurrent}
                    </span>
                </motion.div>

            </div>

        </section>
    );
}