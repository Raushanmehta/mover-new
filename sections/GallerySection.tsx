"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryCard from "@/components/cards/GalleryCard";
import site from "@/data/index";
import {
    defaultViewport,
    staggerContainer,
    titleVariants,
    subtitleVariants,
    descVariants,
    fadeInUp,
    buttonHoverTap,
    lineExpandVariants,
    modalBackdropVariants,
    modalContentVariants,
} from "@/utils/animations";

interface GallerySectionProps {
    data?: typeof site.gallery;
}

export default function GallerySection({ data: propData }: GallerySectionProps = {}) {
    const data = propData || site.gallery;
    const galleryItems = data.items;
    const categories = data.categories;

    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const filteredItems = activeFilter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter);

    const handleNextModal = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
        }
    };

    const handlePrevModal = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
            );
        }
    };

    return (
        <section className="w-full bg-[#FAF9F6] py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="text-center max-w-3xl mx-auto mb-4 lg:mb-6 flex flex-col items-center gap-1"
                >
                    <motion.div variants={subtitleVariants} className="flex items-center gap-3 text-[#D89B33]">
                        <motion.span variants={lineExpandVariants} className="h-[1.5px] bg-[#D89B33]" />
                        <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
                            {data.subtitle}
                        </span>
                        <motion.span variants={lineExpandVariants} className="h-[1.5px] bg-[#D89B33]" />
                    </motion.div>

                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 leading-tight"
                    >
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={descVariants}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    variants={fadeInUp}
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            className={`px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeFilter === category
                                ? "bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 shadow-md"
                                : "bg-white text-gray-700 hover:text-[#D89B33] border border-gray-200"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* 4-Column Gallery Grid */}
                <motion.div
                    layout
                    variants={staggerContainer(0.06)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <GalleryCard
                                key={item.id}
                                item={item}
                                index={index}
                                onClick={() => setSelectedImageIndex(index)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Fullscreen Modal Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        variants={modalBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    >
                        {/* Close Button */}
                        <motion.button
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-6 right-6 z-50 text-white hover:text-[#D89B33] text-2xl transition-colors cursor-pointer"
                            aria-label="Close Preview"
                        >
                            <FaTimes />
                        </motion.button>

                        {/* Prev Navigation */}
                        <motion.button
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            onClick={handlePrevModal}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#D89B33] text-white hover:text-gray-950 flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Previous Image"
                        >
                            <FaChevronLeft className="text-lg" />
                        </motion.button>

                        {/* Next Navigation */}
                        <motion.button
                            whileHover={buttonHoverTap.hover}
                            whileTap={buttonHoverTap.tap}
                            onClick={handleNextModal}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#D89B33] text-white hover:text-gray-950 flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Next Image"
                        >
                            <FaChevronRight className="text-lg" />
                        </motion.button>

                        {/* Image & Title Display Container */}
                        <motion.div
                            variants={modalContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative max-w-4xl w-full h-[70vh] flex flex-col items-center justify-center"
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl">
                                <Image
                                    src={filteredItems[selectedImageIndex].image}
                                    alt={filteredItems[selectedImageIndex].title}
                                    fill
                                    sizes="(max-width: 1024px) 95vw, 900px"
                                    className="object-contain object-center"
                                />
                            </div>

                            <div className="mt-4 text-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#D89B33]">
                                    {filteredItems[selectedImageIndex].category}
                                </span>
                                <h3 className="font-serif text-xl font-bold text-white mt-1">
                                    {filteredItems[selectedImageIndex].title}
                                </h3>
                            </div>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}