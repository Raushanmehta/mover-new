import GallerySection from "@/sections/GallerySection";
import Breadcrumb from "@/components/common/Breadcrumb";
import site from "@/data/index";

export default function GalleryPage() {
    return (
        <main>
            <Breadcrumb
                title="Gallery"
                breadcrumbHome="Home"
                breadcrumbCurrent="Gallery"
                data={site.pageTopSection}
            />
            <GallerySection data={site.gallery} />
        </main>
    );
}