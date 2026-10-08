import { Suspense } from "react";
import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection, { BlogPostItem } from "@/pages/BlogDetailSection";
import site from "@/data/index";

export function generateStaticParams() {
    const posts = (site.blog.blogPosts || site.blog.posts) as unknown as BlogPostItem[];
    return posts.map((post) => ({
        slug: post.slug?.replace(/^\/blog\//, "") || String(post.id),
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function BlogDetailContent({ params }: PageProps) {
    const { slug } = await params;
    const posts = (site.blog.blogPosts || site.blog.posts) as unknown as BlogPostItem[];
    const currentPost =
        posts.find(
            (p) =>
                p.slug === slug ||
                p.slug === `/blog/${slug}` ||
                p.href === `/blog/${slug}` ||
                String(p.id) === slug
        ) || posts[0];

    return (
        <main>
            <PageTopSection
                title={currentPost?.title || "Blog Detail"}
                breadcrumbHome="Home"
                breadcrumbCurrent="Blog Detail"
                data={site.pageTopSection}
            />
            <BlogDetailSection
                currentSlug={slug}
                postData={currentPost}
                postsList={posts}
                sidebarData={site.blog.detailSidebar}
            />
        </main>
    );
}

export default function BlogDetailPage({ params }: PageProps) {
    return (
        <Suspense fallback={null}>
            <BlogDetailContent params={params} />
        </Suspense>
    );
}