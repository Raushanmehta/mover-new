"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaQuoteLeft, FaRegCalendarAlt, FaRegFolderOpen } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import site from "@/data/index";

export interface BlogPostSection {
    step?: string;
    title: string;
    content: string;
    image: string;
}

export interface BlogPostItem {
    id: number | string;
    slug: string;
    href?: string;
    day?: string;
    month?: string;
    year?: string;
    date?: string;
    category?: string;
    subCategory?: string;
    title: string;
    excerpt?: string;
    image: string;
    bannerImage?: string;
    intro?: string;
    sections?: BlogPostSection[];
    quote?: string;
}

export interface BlogDetailSidebarData {
    recentPostsTitle: string;
    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonHref: string;
        image: string;
    };
    categoriesTitle: string;
    categories: Array<{
        name: string;
        count: number;
        slug: string;
    }>;
}

interface BlogDetailSectionProps {
    currentSlug?: string;
    postData?: BlogPostItem;
    postsList?: BlogPostItem[];
    sidebarData?: BlogDetailSidebarData;
}

export default function BlogDetailSection({
    currentSlug,
    postData: propPost,
    postsList: propList,
    sidebarData: propSidebar,
}: BlogDetailSectionProps = {}) {
    const list = propList || ((site.blog.blogPosts || site.blog.posts) as unknown as BlogPostItem[]);
    const sidebar = propSidebar || (site.blog.detailSidebar as unknown as BlogDetailSidebarData);

    const post =
        propPost ||
        list.find((p) => p.slug === currentSlug || p.slug === `/blog/${currentSlug}` || p.href === `/blog/${currentSlug}`) ||
        list[0];

    const currentPostSlug = post.slug?.replace(/^\/blog\//, "") || "";
    const recentPosts = list.filter((p) => (p.slug?.replace(/^\/blog\//, "") !== currentPostSlug)).slice(0, 4);
    const sections = post.sections || [];
    const formattedDate = post.date || (post.day && post.month ? `${post.day} ${post.month}, ${post.year || 2026}` : "12 Mar, 2026");

    return (
        <section className="w-full bg-[#FAF9F6] py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                {/* Left Column: Article Detail Content (8 Cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-8 flex flex-col gap-8"
                >
                    {/* Header & Eyebrow */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[#D89B33]">
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                {post.category || "Beauty Tips"}
                            </span>
                            <span className="w-8 h-[2px] bg-[#D89B33]" />
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500 font-medium pt-1">
                            <span className="flex items-center gap-2">
                                <FaRegCalendarAlt className="text-[#D89B33]" />
                                {formattedDate}
                            </span>
                            {post.subCategory && (
                                <span className="flex items-center gap-2">
                                    <FaRegFolderOpen className="text-[#D89B33]" />
                                    {post.subCategory}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Main Article Banner Image */}
                    <div className="relative w-full h-[320px] sm:h-[440px] overflow-hidden shadow-md bg-gray-200">
                        <Image
                            src={post.bannerImage || post.image}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Intro Paragraph */}
                    {(post.intro || post.excerpt) && (
                        <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
                            {post.intro || post.excerpt}
                        </p>
                    )}

                    {/* Step-by-Step Sections */}
                    {sections.map((sec, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-200/60"
                        >
                            <div className="md:col-span-7 space-y-4">
                                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-950">
                                    {sec.step ? `${sec.step}. ${sec.title}` : sec.title}
                                </h2>
                                <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {sec.content}
                                </p>
                            </div>
                            <div className="md:col-span-5 relative h-[180px] overflow-hidden shadow-sm bg-gray-200">
                                <Image
                                    src={sec.image}
                                    alt={sec.title}
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Quote Banner Box */}
                    {post.quote && (
                        <div className="p-6 sm:p-8 bg-[#F7F5F0] border-l-4 border-[#D89B33] border-y border-r border-amber-200/60 flex items-start gap-4 mt-2 shadow-sm">
                            <FaQuoteLeft className="text-[#D89B33] text-3xl shrink-0 mt-1" />
                            <p className="font-serif italic text-base sm:text-lg text-gray-800 leading-relaxed">
                                &ldquo;{post.quote}&rdquo;
                            </p>
                        </div>
                    )}

                </motion.div>

                {/* Right Sidebar Column (4 Cols) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-4 flex flex-col gap-8"
                >

                    {/* Widget 1: Recent Posts */}
                    {recentPosts.length > 0 && (
                        <div className="bg-[#F7F5F0] p-6 border border-gray-200/80 shadow-sm space-y-4">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-gray-950">
                                    {sidebar?.recentPostsTitle || "Recent Posts"}
                                </h3>
                                <span className="block w-8 h-[2px] bg-[#D89B33] mt-2" />
                            </div>

                            <div className="space-y-4">
                                {recentPosts.map((rPost) => {
                                    const rSlug = rPost.slug?.replace(/^\/blog\//, "") || "";
                                    const rHref = `/blog/${rSlug}`;
                                    const rDate = rPost.date || `${rPost.day} ${rPost.month}, ${rPost.year || 2026}`;

                                    return (
                                        <Link
                                            key={rPost.id}
                                            href={rHref}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="relative w-16 h-16 overflow-hidden shrink-0 bg-gray-200">
                                                <Image
                                                    src={rPost.image}
                                                    alt={rPost.title}
                                                    fill
                                                    className="object-cover object-center group-hover:scale-105 transition-transform"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-serif text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#D89B33] transition-colors leading-snug line-clamp-2">
                                                    {rPost.title}
                                                </h4>
                                                <span className="text-[11px] text-gray-500 block">
                                                    {rDate}
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Widget 2: Book Beauty Session CTA Card */}
                    {sidebar?.cta && (
                        <div className="relative overflow-hidden min-h-[320px] flex flex-col justify-end text-white shadow-lg bg-gray-950 space-y-4">
                            <Image
                                src={sidebar.cta.image}
                                alt={sidebar.cta.title}
                                fill
                                className="object-cover object-center brightness-[0.7]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                            <div className="relative z-20 p-6 text-center space-y-4">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl font-bold leading-tight whitespace-pre-line">
                                        {sidebar.cta.title}
                                    </h3>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                        {sidebar.cta.description}
                                    </p>
                                </div>

                                <Link
                                    href={sidebar.cta.buttonHref}
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-6 py-2.5 shadow text-xs sm:text-sm uppercase tracking-wider hover:brightness-105 transition-all"
                                >
                                    <span>{sidebar.cta.buttonText}</span>
                                    <HiArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Widget 3: Categories List */}
                    {sidebar?.categories && (
                        <div className="bg-[#F7F5F0] p-6 border border-gray-200/80 shadow-sm space-y-4">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-gray-950">
                                    {sidebar.categoriesTitle || "Categories"}
                                </h3>
                                <span className="block w-8 h-[2px] bg-[#D89B33] mt-2" />
                            </div>

                            <ul className="space-y-2">
                                {sidebar.categories.map((cat, index) => (
                                    <li key={index}>
                                        <Link
                                            href={cat.slug}
                                            className="flex items-center justify-between py-2.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#D89B33] transition-colors group"
                                        >
                                            <span>
                                                {cat.name} <span className="text-gray-400">({cat.count})</span>
                                            </span>
                                            <FaChevronRight className="text-xs text-gray-400 group-hover:text-[#D89B33] transition-colors" />
                                        </Link>
                                        {index < sidebar.categories.length - 1 && (
                                            <span className="block w-full h-[1px] bg-gray-200/60" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </motion.div>

            </div>
        </section>
    );
}