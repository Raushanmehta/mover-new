import { Suspense } from "react";
import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/sections/BlogDetailSection";
import { siteMap } from "@/data";

interface BlogDetailPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return siteMap.blog.blogPosts.map((post) => ({
        slug: post.slug?.replace(/^\/blog\//, "") || String(post.id),
    }));
}

async function BlogContent({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const blogData = siteMap.blog;
    return <BlogDetailSection data={blogData} initialSlug={slug} />;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    return (
        <main>
            <PageTopSection
                title={"Blog Detail"}
                breadcrumbCurrent={"Blog Detail"}
                breadcrumbHome="Home"
            />
            <Suspense fallback={<div className="min-h-[400px] w-full bg-[#FAF9F6]" />}>
                <BlogContent params={params} />
            </Suspense>
        </main>
    );
}