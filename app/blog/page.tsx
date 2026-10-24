import Breadcrumb from "@/components/common/Breadcrumb";
import BlogSection from "@/sections/home/BlogSection";
import site from "@/data/index";

export default function BlogPage() {
    return (
        <main>
            <Breadcrumb
                title="Blog"
                breadcrumbHome="Home"
                breadcrumbCurrent="Blog"
                data={site.pageTopSection}
            />
            <BlogSection data={site.blog} />
        </main>
    );
}