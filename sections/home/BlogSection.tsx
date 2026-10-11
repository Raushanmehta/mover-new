"use client";

import React from "react";
import BlogCard, { type BlogPost } from "@/components/cards/BlogCard";
import { motion } from "framer-motion";
import site from "@/data/index";
import {
    titleVariants,
    subtitleVariants,
    descVariants,
    defaultViewport,
    staggerContainer,
} from "@/utils/animations";

interface BlogSectionData {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    blogPosts?: BlogPost[];
    posts?: BlogPost[];
}

interface BlogSectionProps {
    data?: BlogSectionData;
}

export default function BlogSection({ data: propData }: BlogSectionProps = {}) {
    const data = (propData || site.blog) as BlogSectionData;
    const blogPosts: BlogPost[] = data.blogPosts || data.posts || [];

    return (
        <section className="w-full bg-white py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="text-center max-w-3xl mx-auto mb-4 lg:mb-6 flex flex-col items-center gap-3"
                >
                    {/* Subtitle */}
                    <motion.div
                        variants={subtitleVariants}
                        className="flex items-center gap-2 text-[#D89B33]"
                    >
                        <span className="w-8 md:w-10 h-[1.5px] bg-[#D89B33]" />
                        <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
                            {data.subtitle}
                        </span>
                        <span className="w-8 md:w-10 h-[1.5px] bg-[#D89B33]" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        variants={titleVariants}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-950 leading-tight"
                    >
                        {data.title}{" "}
                        <span className="bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] bg-clip-text text-transparent font-bold">
                            {data.titleHighlight}
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={descVariants}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}