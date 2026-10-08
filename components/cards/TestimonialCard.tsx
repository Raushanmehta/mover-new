"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { cardVariants, cardHover } from "@/utils/animations";

export interface TestimonialItem {
    id: number | string;
    name: string;
    role?: string;
    image: string;
    rating?: number;
    quote?: string;
    feedback?: string;
}

export default function TestimonialCard({
    item,
    testimonial,
    index = 0,
}: {
    item?: TestimonialItem;
    testimonial?: TestimonialItem;
    index?: number;
}) {
    const data = item || testimonial;
    if (!data) return null;

    return (
        <motion.div
            key={data.id}
            variants={cardVariants}
            whileHover={cardHover.hover}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-2 border border-amber-50 h-full"
        >
            {/* Left Side: Client Image */}
            <div className="relative w-full h-[220px] sm:h-full min-h-[220px]">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Right Side: Quote & Details */}
            <div className="p-5 flex flex-col justify-between gap-2">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#D89B33]/60 text-2xl" />

                {/* Review Text */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {data.quote}
                </p>

                <div>
                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-1 text-[#D89B33] text-xs mb-2">
                        {[...Array(data.rating)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>

                    {/* Client Name */}
                    <h3 className="font-serif text-base font-bold text-gray-900">
                        {data.name}
                    </h3>

                    {/* Client Role */}
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-[#D89B33] uppercase mt-0.5">
                        {data.role}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}