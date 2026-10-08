import PageTopSection from "@/components/common/PageTopSection";
import CtaSection from "@/sections/home/CtaSection";
import ServiceSection from "@/sections/home/ServiceSection";
import site from "@/data/index";

export default function ServicePage() {
    return (
        <main>
            <PageTopSection
                title="Services"
                breadcrumbHome="Home"
                breadcrumbCurrent="Services"
                data={site.pageTopSection}
            />
            <ServiceSection data={site.services} />
            <CtaSection data={site.cta} />
        </main>
    );
}