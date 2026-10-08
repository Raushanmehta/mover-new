import PageTopSection from "@/components/common/PageTopSection";
import BlogSection from "@/sections/home/BlogSection";
import site from "@/data/index";

export default function BlogPage() {
    return (
        <main>
            <PageTopSection
                title="Blog"
                breadcrumbHome="Home"
                breadcrumbCurrent="Blog"
                data={site.pageTopSection}
            />
            <BlogSection data={site.blog} />
        </main>
    );
}