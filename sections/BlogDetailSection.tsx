"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    data?: unknown;
    initialSlug?: string;
    currentSlug?: string;
    postData?: BlogPostItem;
    postsList?: BlogPostItem[];
    sidebarData?: BlogDetailSidebarData;
}

function isCategoryMatch(postCat?: string, catName?: string): boolean {
    if (!postCat || !catName) return false;
    const a = postCat.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const b = catName.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    return a === b || a.includes(b) || b.includes(a);
}

export default function BlogDetailSection({
    data: propData,
    initialSlug,
    currentSlug,
    postData: propPost,
    postsList: propList,
    sidebarData: propSidebar,
}: BlogDetailSectionProps = {}) {
    const blogData = (propData || site?.blog) as {
        blogPosts?: BlogPostItem[];
        posts?: BlogPostItem[];
        categories?: Array<{ name: string; count?: number; slug?: string }>;
        detailSidebar?: BlogDetailSidebarData;
    } | undefined;
    const list = (propList || blogData?.blogPosts || blogData?.posts || site?.blog?.blogPosts || []) as unknown as BlogPostItem[];
    const sidebar = propSidebar || (blogData?.detailSidebar || site?.blog?.detailSidebar) as unknown as BlogDetailSidebarData;

    const categories = (sidebar?.categories || blogData?.categories || [
        { name: "Hair Care", count: 8, slug: "/blog" },
        { name: "Hair Styling", count: 6, slug: "/blog" },
        { name: "Skin Care", count: 5, slug: "/blog" },
        { name: "Makeup", count: 4, slug: "/blog" },
        { name: "Facial Treatments", count: 7, slug: "/blog" },
        { name: "Nail Care", count: 3, slug: "/blog" },
        { name: "Beauty Tips", count: 6, slug: "/blog" },
    ]) as Array<{ name: string; count?: number; slug?: string }>;

    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const targetSlug = selectedSlug || initialSlug || currentSlug;
    const activeSlug =
        (targetSlug && list.some((p) => p.slug === targetSlug || p.slug === `/blog/${targetSlug}` || p.href === `/blog/${targetSlug}` || String(p.id) === targetSlug)
            ? targetSlug.replace(/^\/blog\//, "")
            : null) ||
        list[0]?.slug?.replace(/^\/blog\//, "") ||
        String(list[0]?.id) ||
        "1";

    const post =
        propPost ||
        list.find((p) => {
            const clean = p.slug?.replace(/^\/blog\//, "") || String(p.id);
            return clean === activeSlug || p.slug === activeSlug || p.href === `/blog/${activeSlug}`;
        }) ||
        list[0];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const activeCategory = selectedCategory || post?.category || "Hair Care";

    if (!post) {
        return (
            <section className="w-full bg-[#FAF9F6] py-16 text-center">
                <p className="text-gray-500 font-sans text-base">Blog post not found.</p>
            </section>
        );
    }

    const handlePostSelect = (slugOrId: string | number) => {
        const cleanSlug = String(slugOrId).replace(/^\/blog\//, "");
        setSelectedSlug(cleanSlug);
        if (typeof window !== "undefined") {
            window.history.pushState(null, "", `/blog/${cleanSlug}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
        const matchingPost = list.find((p) => isCategoryMatch(p.category, categoryName));
        if (matchingPost) {
            handlePostSelect(matchingPost.slug || matchingPost.id);
        }
    };

    const currentPostSlug = post.slug?.replace(/^\/blog\//, "") || String(post.id);
    const recentPosts = list.filter((p) => (p.slug?.replace(/^\/blog\//, "") !== currentPostSlug && String(p.id) !== currentPostSlug)).slice(0, 4);
    const displayRecentPosts = recentPosts.length > 0 ? recentPosts : list.slice(0, 4);
    const sections = post.sections || [];
    const formattedDate = post.date || (post.day && post.month ? `${post.day} ${post.month}, ${post.year || 2026}` : "12 Mar, 2026");

    return (
        <section className="w-full bg-[#FAF9F6] py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main content */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.article
                            key={post.id || currentPostSlug}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-[#D89B33]">
                                    <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em]">
                                        {post.category || "Beauty Tips"}
                                    </span>
                                    <span className="w-8 h-[2px] bg-[#D89B33]" />
                                </div>

                                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-950 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500 font-medium pt-1 border-b border-gray-200/60 pb-3">
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

                            {/* Banner image */}
                            <div className="relative w-full h-[320px] sm:h-[440px] overflow-hidden shadow-md bg-gray-200 group">
                                <Image
                                    src={post.bannerImage || post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 850px"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {(post.intro || post.excerpt) && (
                                <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
                                    {post.intro || post.excerpt}
                                </p>
                            )}

                            {/* Article sections */}
                            {sections.map((sec, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start border-b border-gray-200/60"
                                >
                                    <div className="md:col-span-7 space-y-2">
                                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-950">
                                            {sec.step ? `${sec.step}. ${sec.title}` : sec.title}
                                        </h2>
                                        <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                            {sec.content}
                                        </p>
                                    </div>
                                    <div className="md:col-span-5 relative h-[200px] sm:h-[220px] overflow-hidden shadow-sm bg-gray-200">
                                        <Image
                                            src={sec.image}
                                            alt={sec.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 350px"
                                            className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Quote box */}
                            {post.quote && (
                                <div className="p-6 sm:p-8 bg-[#F7F5F0] border-l-4 border-[#D89B33] border-y border-r border-amber-200/60 flex items-start gap-4 shadow-sm">
                                    <FaQuoteLeft className="text-[#D89B33] text-3xl shrink-0 mt-1" />
                                    <p className="font-serif italic text-base sm:text-lg text-gray-800 leading-relaxed">
                                        &ldquo;{post.quote}&rdquo;
                                    </p>
                                </div>
                            )}
                        </motion.article>
                    </AnimatePresence>
                </div>

                {/* Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-4 flex flex-col gap-8"
                >
                    {/* Recent posts */}
                    {displayRecentPosts.length > 0 && (
                        <div className="bg-[#F7F5F0] p-6 border border-gray-200/80 shadow-sm space-y-4">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-gray-950">
                                    {sidebar?.recentPostsTitle || "Recent Posts"}
                                </h3>
                                <span className="block w-10 h-[2.5px] bg-[#D89B33] mt-2 rounded-full" />
                            </div>

                            <div className="space-y-3">
                                {displayRecentPosts.map((rPost) => {
                                    const rSlug = rPost.slug?.replace(/^\/blog\//, "") || String(rPost.id);
                                    const rDate = rPost.date || `${rPost.day} ${rPost.month}, ${rPost.year || 2026}`;

                                    return (
                                        <div
                                            key={rPost.id}
                                            onClick={() => handlePostSelect(rSlug)}
                                            className="flex items-center gap-4 group cursor-pointer p-1.5 rounded-xl hover:bg-gray-200/40 transition-colors"
                                        >
                                            <div className="relative w-16 h-16 overflow-hidden shrink-0 bg-gray-200 rounded-lg">
                                                <Image
                                                    src={rPost.image}
                                                    alt={rPost.title}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="space-y-1 min-w-0 flex-1">
                                                <h4 className="font-serif text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#D89B33] transition-colors leading-snug line-clamp-2">
                                                    {rPost.title}
                                                </h4>
                                                <span className="text-[11px] text-gray-500 block">
                                                    {rDate}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Promo card */}
                    {sidebar?.cta && (
                        <div className="relative overflow-hidden min-h-[320px] flex flex-col justify-end text-white shadow-lg bg-gray-950 space-y-4 rounded-xl">
                            <Image
                                src={sidebar.cta.image}
                                alt={sidebar.cta.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
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
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-6 py-2.5 shadow text-xs sm:text-sm uppercase tracking-wider hover:brightness-105 transition-all rounded-md"
                                >
                                    <span>{sidebar.cta.buttonText}</span>
                                    <HiArrowRight className="text-sm" />
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Categories Widget */}
                    {categories && categories.length > 0 && (
                        <div className="bg-[#F7F5F0] p-6 border border-gray-200/80 shadow-sm space-y-4">
                            <div>
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-950">
                                    {sidebar?.categoriesTitle || "Categories"}
                                </h3>
                                <span className="block w-10 h-[2.5px] bg-[#D89B33] mt-2 rounded-full" />
                            </div>

                            <div className="space-y-2">
                                {categories.map((cat, idx) => {
                                    const isActive = isCategoryMatch(activeCategory, cat.name);
                                    return (
                                        <motion.button
                                            key={idx}
                                            type="button"
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleCategoryClick(cat.name)}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm lg:text-base transition-all duration-200 cursor-pointer text-left ${isActive
                                                ? "bg-gradient-to-r from-amber-100/80 via-amber-50 to-amber-50/20 text-[#B87A1E] font-bold border-l-4 border-[#D89B33] shadow-xs"
                                                : "text-gray-700 hover:bg-gray-100/70 hover:text-[#D89B33]"
                                                }`}
                                        >
                                            <span className="truncate pr-2 font-medium">{cat.name}</span>
                                            <div className="flex items-center space-x-2 shrink-0">
                                                {typeof cat.count !== "undefined" && (
                                                    <span
                                                        className={`text-xs px-2.5 py-0.5 rounded-full font-semibold transition-colors ${isActive
                                                            ? "bg-[#D89B33] text-gray-950 shadow-xs"
                                                            : "bg-white border border-gray-200 text-gray-500"
                                                            }`}
                                                    >
                                                        {cat.count}
                                                    </span>
                                                )}
                                                <FaChevronRight
                                                    className={`w-3.5 h-3.5 transition-colors ${isActive ? "text-[#D89B33]" : "text-gray-400"
                                                        }`}
                                                />
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
