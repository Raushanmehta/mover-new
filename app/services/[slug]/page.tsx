import { Suspense } from "react";
import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection, { ServiceDetailItem } from "@/pages/ServiceDetailSection";
import site from "@/data/index";

export function generateStaticParams() {
    const list = (site.services.servicesList || site.services.services) as unknown as ServiceDetailItem[];
    return list.map((item) => ({
        slug: item.slug || item.id,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function ServiceDetailContent({ params }: PageProps) {
    const { slug } = await params;
    const list = (site.services.servicesList || site.services.services) as unknown as ServiceDetailItem[];
    const currentService = list.find((s) => (s.slug || s.id) === slug) || list[0];

    return (
        <main>
            <PageTopSection
                title={currentService?.name || currentService?.title || "Service Detail"}
                breadcrumbHome="Home"
                breadcrumbCurrent={currentService?.name || currentService?.title || "Service Detail"}
                data={site.pageTopSection}
            />
            <ServiceDetailSection
                currentSlug={slug}
                serviceData={currentService}
                servicesList={list}
                sidebarData={site.services.detailSidebar}
            />
        </main>
    );
}

export default function ServiceDetailPage({ params }: PageProps) {
    return (
        <Suspense fallback={null}>
            <ServiceDetailContent params={params} />
        </Suspense>
    );
}