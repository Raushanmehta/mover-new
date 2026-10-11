"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
    FaChevronRight,
    FaPhoneAlt,
    FaEnvelope,
    FaCheckCircle,
} from "react-icons/fa";
import { Headset, Leaf, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";
import site from "@/data/index";
import {
    defaultViewport,
    staggerContainer,
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    titleVariants,
    subtitleVariants,
    descVariants,
    imageScaleIn,
    buttonHoverTap,
    lineExpandVariants,
    listItemHover,
} from "@/utils/animations";

const featureIconMap: Record<string, React.ElementType> = {
    Leaf,
    Sparkles,
    ShieldCheck,
    Clock,
    Award,
};

export interface ServiceDetailItem {
    id: string;
    slug?: string;
    name: string;
    title: string;
    href?: string;
    icon?: string;
    description: string;
    detailedDescription?: string[];
    points?: string[];
    bannerImg?: string;
    mainImg?: string;
    salonImg?: string;
    features?: Array<{
        icon: string;
        title: string;
        subtitle: string;
    }>;
    howItWorks?: {
        title: string;
        description: string;
        image: string;
    };
    keyBenefits?: {
        title: string;
        points: string[];
        image: string;
    };
}

export interface ServiceDetailSidebarData {
    title: string;
    assistance: {
        title: string;
        description: string;
        phone: string;
        email: string;
    };
    specialOffer: {
        badge: string;
        title: string;
        subtitle: string;
        buttonText: string;
        buttonHref: string;
        image: string;
    };
}

interface ServiceDetailSectionProps {
    data?: any;
    initialServiceId?: string;
    currentSlug?: string;
    serviceData?: ServiceDetailItem;
    servicesList?: ServiceDetailItem[];
    sidebarData?: ServiceDetailSidebarData;
}

export default function ServiceDetailSection({
    data: propData,
    initialServiceId,
    currentSlug,
    serviceData: propService,
    servicesList: propList,
    sidebarData: propSidebar,
}: ServiceDetailSectionProps = {}) {
    const servicesObj = propData || site.services;
    const fallbackList = (servicesObj?.servicesList || servicesObj?.services) as unknown as ServiceDetailItem[];
    const list = propList || fallbackList || [];
    const sidebar = propSidebar || (servicesObj?.detailSidebar as unknown as ServiceDetailSidebarData);

    const slugToFind = initialServiceId || currentSlug;
    const activeService: ServiceDetailItem =
        propService ||
        list.find((s) => (s.slug || s.id) === slugToFind) ||
        list.find((s) => (s.slug || s.id) === "bleaching") ||
        list[0];

    const activeSlug = activeService.slug || activeService.id;
    const detailedDescriptions = activeService.detailedDescription || [activeService.description];
    const features = activeService.features || [];
    const howItWorks = activeService.howItWorks || {
        title: "How It Works",
        description: activeService.description,
        image: activeService.salonImg || "/images/service/service-how-it-works.png",
    };
    const keyBenefits = activeService.keyBenefits || {
        title: "Key Benefits",
        points: activeService.points || [],
        image: activeService.mainImg || "/images/service/service-glow-comparison.png",
    };

    return (
        <section className="w-full bg-[#FAF9F6] py-8 lg:py-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar column */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="lg:col-span-4 flex flex-col gap-4"
                >
                    {/* Services menu */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-[#0B0C10] p-4 text-white shadow-md border border-gray-900 space-y-4"
                    >
                        <div className="space-y-2 pb-2">
                            <span className="text-sm font-bold tracking-[0.2em] text-[#D89B33] uppercase">
                                {sidebar?.title || "Our Services"}
                            </span>
                            <span className="block w-full h-[1px] bg-gray-800" />
                        </div>

                        <ul className="space-y-2">
                            {list.map((service, index) => {
                                const sSlug = service.slug || service.id;
                                const isActive = activeSlug === sSlug;
                                const targetHref = service.href || `/services/${sSlug}`;

                                return (
                                    <li key={service.id || index}>
                                        <Link
                                            href={targetHref}
                                            className="block"
                                        >
                                            <motion.div
                                                whileHover={buttonHoverTap.hover}
                                                whileTap={buttonHoverTap.tap}
                                                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                                                    ? "bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 shadow-md"
                                                    : "text-gray-300 hover:text-white hover:bg-gray-900"
                                                    }`}
                                            >
                                                <span>{service.name || service.title}</span>
                                                <FaChevronRight className={`text-xs ${isActive ? "text-gray-950" : "text-gray-500"}`} />
                                            </motion.div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Assistance card */}
                    {sidebar?.assistance && (
                        <motion.div
                            variants={fadeInUp}
                            className="relative bg-[#0B0C10] p-6 text-white shadow-md border border-gray-900 overflow-hidden space-y-4"
                        >
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="w-12 h-12 bg-amber-500/10 border border-[#D89B33]/40 text-[#D89B33] flex items-center justify-center">
                                    <Headset className="w-6 h-6" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl font-bold">
                                        {sidebar.assistance.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        {sidebar.assistance.description}
                                    </p>
                                </div>

                                <div className="space-y-3 text-xs sm:text-sm text-gray-300 pt-2 border-t border-gray-800">
                                    <motion.a
                                        whileHover={listItemHover.hover}
                                        href={`tel:${sidebar.assistance.phone.replace(/\s+/g, "")}`}
                                        className="flex items-center gap-3 hover:text-[#D89B33] transition-colors"
                                    >
                                        <FaPhoneAlt className="text-[#D89B33]" />
                                        <span>{sidebar.assistance.phone}</span>
                                    </motion.a>
                                    <motion.a
                                        whileHover={listItemHover.hover}
                                        href={`mailto:${sidebar.assistance.email}`}
                                        className="flex items-center gap-3 hover:text-[#D89B33] transition-colors"
                                    >
                                        <FaEnvelope className="text-[#D89B33]" />
                                        <span>{sidebar.assistance.email}</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Special offer */}
                    {sidebar?.specialOffer && (
                        <motion.div
                            variants={fadeInUp}
                            className="relative bg-[#0B0C10] p-6 text-white shadow-md border border-gray-900 overflow-hidden min-h-[240px] flex flex-col justify-between space-y-4"
                        >
                            <Image
                                src={sidebar.specialOffer.image}
                                alt={sidebar.specialOffer.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
                                className="object-cover object-right opacity-30 pointer-events-none"
                            />

                            <div className="relative z-10 space-y-2">
                                <span className="font-serif italic text-[#D89B33] text-sm">
                                    {sidebar.specialOffer.badge}
                                </span>
                                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                                    {sidebar.specialOffer.title}
                                </h3>
                                <p className="text-xs text-gray-300">
                                    {sidebar.specialOffer.subtitle}
                                </p>
                            </div>

                            <div className="relative z-10 pt-4">
                                <motion.div
                                    whileHover={buttonHoverTap.hover}
                                    whileTap={buttonHoverTap.tap}
                                    className="inline-block"
                                >
                                    <Link
                                        href={sidebar.specialOffer.buttonHref}
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D89B33] via-[#E2A944] to-[#B87A1E] text-gray-950 font-semibold px-6 py-3 shadow text-xs sm:text-sm uppercase tracking-wider"
                                    >
                                        <span>{sidebar.specialOffer.buttonText}</span>
                                        <HiArrowRight className="text-base" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Detail column */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="lg:col-span-8 flex flex-col gap-6"
                >
                    {/* Banner image */}
                    <motion.div
                        variants={imageScaleIn}
                        className="relative w-full h-[300px] sm:h-[400px] overflow-hidden shadow-md bg-gray-200 group"
                    >
                        <Image
                            src={activeService.bannerImg || activeService.mainImg || "/images/service/service-bleaching-main.png"}
                            alt={activeService.title || activeService.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 850px"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Headline and text */}
                    <div className="space-y-4">
                        <motion.div variants={subtitleVariants} className="flex items-center gap-2 text-[#D89B33]">
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">
                                Service Detail
                            </span>
                            <motion.span variants={lineExpandVariants} className="h-[2px] bg-[#D89B33]" />
                        </motion.div>

                        <motion.h1
                            variants={titleVariants}
                            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 leading-tight"
                        >
                            {activeService.title || activeService.name}
                        </motion.h1>

                        <motion.div variants={descVariants} className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            {detailedDescriptions.map((paragraph, pIdx) => (
                                <p key={pIdx}>{paragraph}</p>
                            ))}
                        </motion.div>
                    </div>

                    {/* Features bar */}
                    {features.length > 0 && (
                        <motion.div
                            variants={staggerContainer(0.08)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#F7F5F0] border border-gray-200/80"
                        >
                            {features.map((feature, fIdx) => {
                                const IconComp = featureIconMap[feature.icon] || Sparkles;
                                const isNotLast = fIdx < features.length - 1;

                                return (
                                    <motion.div
                                        key={fIdx}
                                        variants={fadeInUp}
                                        whileHover={{ y: -3 }}
                                        className={`flex flex-col items-center text-center gap-2 ${isNotLast ? "sm:border-r sm:border-gray-300 sm:pr-2" : "sm:pl-2"
                                            } transition-transform`}
                                    >
                                        <IconComp className="w-10 h-10 text-[#B87A1E]" />
                                        <span className="text-xs font-bold text-gray-900 leading-snug uppercase tracking-wide">
                                            {feature.title} <br /> {feature.subtitle}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {/* Process section */}
                    {howItWorks && (
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                        >
                            <div className="md:col-span-7 space-y-3">
                                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-950">
                                    {howItWorks.title}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {howItWorks.description}
                                </p>
                            </div>

                            <motion.div
                                variants={imageScaleIn}
                                className="md:col-span-5 relative h-[190px] overflow-hidden shadow-sm bg-gray-200 group"
                            >
                                <Image
                                    src={howItWorks.image}
                                    alt={howItWorks.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 350px"
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Key benefits */}
                    {keyBenefits && (
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                        >
                            <div className="md:col-span-7 space-y-3">
                                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-950">
                                    {keyBenefits.title}
                                </h2>

                                <ul className="space-y-3">
                                    {keyBenefits.points.map((point, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={listItemHover.hover}
                                            className="flex items-center gap-3 transition-colors"
                                        >
                                            <FaCheckCircle className="text-[#D89B33] text-base shrink-0" />
                                            <span className="text-sm font-medium text-gray-800">
                                                {point}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.div
                                variants={imageScaleIn}
                                className="md:col-span-5 relative h-[210px] overflow-hidden shadow-sm bg-gray-200 group"
                            >
                                <Image
                                    src={keyBenefits.image}
                                    alt={keyBenefits.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 350px"
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
