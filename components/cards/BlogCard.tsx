"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { cardVariants, blogCardHover } from "@/utils/animations";

export interface BlogPost {
    id: number | string;
    day: string;
    month: string;
    image: string;
    title: string;
    excerpt?: string;
    category?: string;
    author?: string;
    commentsCount?: number;
    slug?: string;
    href?: string;
}

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
    return (
        <motion.div
            key={post.id}
            variants={cardVariants}
            whileHover={blogCardHover.hover}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-gray-100 group cursor-pointer"
        >
            <div>
                {/* Article Featured Image Container */}
                <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-gray-100">

                    {/* Floating Golden Date Badge */}
                    <div className="absolute top-3 left-3 z-10 bg-gradient-to-b from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-3 py-1.5 rounded text-center shadow-md leading-tight">
                        <span className="block text-sm font-bold">{post.day}</span>
                        <span className="block text-[10px] tracking-wider uppercase font-extrabold">{post.month}</span>
                    </div>

                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Article Details Container */}
                <div className="p-4 flex flex-col gap-2">

                    {/* Category */}
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#D89B33] uppercase">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug group-hover:text-[#D89B33] transition-colors">
                        <Link href={post.href || (post.slug?.startsWith("/") ? post.slug : `/blog/${post.slug}`) || "#"}>
                            {post.title}
                        </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed ">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Read More Link */}
            <div className="px-4 pb-4 ">
                <Link
                    href={post.href || (post.slug?.startsWith("/") ? post.slug : `/blog/${post.slug}`) || "#"}
                    className="inline-flex items-center gap-2 text-[#D89B33] font-semibold text-sm hover:text-[#B87A1E] transition-colors group/link"
                >
                    <span>Read More</span>
                    <HiArrowRight className="text-base transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>

        </motion.div>
    );
}