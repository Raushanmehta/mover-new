import ContactSection from "@/sections/ContactSection";
import PageTopSection from "@/components/common/PageTopSection";
import site from "@/data/index";

export default function ContactPage() {
    return (
        <main>
            <PageTopSection
                title="Contact Us"
                breadcrumbHome="Home"
                breadcrumbCurrent="Contact Us"
                data={site.pageTopSection}
            />
            <ContactSection data={site.contact} />
        </main>
    );
}