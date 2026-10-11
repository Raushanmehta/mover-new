"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";
import { galleryCardVariants, galleryCardHover } from "@/utils/animations";

export interface GalleryItem {
    id: number | string;
    title: string;
    category: string;
    image: string;
}

interface GalleryCardProps {
    item: GalleryItem;
    index?: number;
    onClick?: (index?: number) => void;
}

export default function GalleryCard({ item, index = 0, onClick }: GalleryCardProps) {
    return (
        <motion.div
            layout
            variants={galleryCardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={galleryCardHover.hover}
            onClick={() => onClick && onClick(index)}
            className="group relative h-[220px] overflow-hidden shadow-sm cursor-pointer bg-gray-100"
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2A944] mb-1">
                    {item.category}
                </span>

                <div className="flex items-center justify-between">
                    <h3 className="font-serif text-sm font-bold truncate pr-2">
                        {item.title}
                    </h3>

                    <div className="w-8 h-8 bg-[#D89B33] text-gray-950 flex items-center justify-center shrink-0 shadow-md">
                        <FaExpand className="text-xs" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}