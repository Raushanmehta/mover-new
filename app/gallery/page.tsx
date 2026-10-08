import GallerySection from "@/sections/GallerySection";
import PageTopSection from "@/components/common/PageTopSection";
import site from "@/data/index";

export default function GalleryPage() {
    return (
        <main>
            <PageTopSection
                title="Gallery"
                breadcrumbHome="Home"
                breadcrumbCurrent="Gallery"
                data={site.pageTopSection}
            />
            <GallerySection data={site.gallery} />
        </main>
    );
}