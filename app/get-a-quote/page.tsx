import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import site from "@/data/index";

export default function GetAQuotePage() {
    return (
        <main>
            <PageTopSection
                title="Get A Quote"
                breadcrumbHome="Home"
                breadcrumbCurrent="Get A Quote"
                data={site.pageTopSection}
            />
            <GetAQuoteSection data={site.getAQuote} />
        </main>
    );
}