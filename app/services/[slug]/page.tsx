import { Suspense } from "react";
import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/sections/ServiceDetailSection";
import { siteMap } from "@/data";

interface ServiceDetailPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return siteMap.services.servicesList.map((service) => ({
        slug: service.slug || service.id,
    }));
}

async function ServiceDetailContent({ params }: ServiceDetailPageProps) {
    const { slug } = await params;
    const services = siteMap.services;
    return <ServiceDetailSection data={services} initialServiceId={slug} />;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    return (
        <main>
            <PageTopSection
                title={"Service Detail"}
                breadcrumbCurrent={"Service Detail"}
                breadcrumbHome="Home"
            />
            <Suspense fallback={<div className="min-h-[400px] w-full bg-[#FAF9F6]" />}>
                <ServiceDetailContent params={params} />
            </Suspense>
        </main>
    );
}