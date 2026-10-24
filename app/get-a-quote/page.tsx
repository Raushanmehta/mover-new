import Breadcrumb from "@/components/common/Breadcrumb";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import site from "@/data/index";

export default function GetAQuotePage() {
    return (
        <main>
            <Breadcrumb
                title="Get A Quote"
                breadcrumbHome="Home"
                breadcrumbCurrent="Get A Quote"
                data={site.pageTopSection}
            />
            <GetAQuoteSection data={site.getAQuote} />
        </main>
    );
}