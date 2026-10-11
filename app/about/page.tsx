import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import CtaSection from "@/sections/home/CtaSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";
import site from "@/data/index";

export default function AboutPage() {
    return (
        <main>
            <PageTopSection
                title="About Us"
                breadcrumbHome="Home"
                breadcrumbCurrent="About Us"
                data={site.pageTopSection}
            />
            <AboutSection data={site.about} showButton={false} />
            <WhyChooseUsSection data={site.whyChooseUs} showButton={false} />
            <CtaSection data={site.cta} />
        </main>
    );
}