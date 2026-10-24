import ContactSection from "@/sections/ContactSection";
import Breadcrumb from "@/components/common/Breadcrumb";
import site from "@/data/index";

export default function ContactPage() {
    return (
        <main>
            <Breadcrumb
                title="Contact Us"
                breadcrumbHome="Home"
                breadcrumbCurrent="Contact Us"
                data={site.pageTopSection}
            />
            <ContactSection data={site.contact} />
        </main>
    );
}