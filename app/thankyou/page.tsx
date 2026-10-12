import type { Metadata } from "next";
import PageTopSection from "@/components/common/PageTopSection";
import ThankYouSection from "@/sections/ThankYouSection";
import site from "@/data/index";

export const metadata: Metadata = {
  title: "Thank You | MoverNew",
  description: "Thank you for contacting MoverNew. Our relocation specialists will get in touch with you shortly.",
};

export default function ThankyouPage() {
  const data = site.thankYou;

  return (
    <main>
      <PageTopSection
        title={data.pageTop.title}
        breadcrumbCurrent={data.pageTop.breadcrumbCurrent}
      />
      <ThankYouSection data={data} />
    </main>
  );
}