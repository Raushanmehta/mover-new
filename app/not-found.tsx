import Link from "next/link";
import { FaCompass, FaHome, FaTruck, FaArrowRight } from "react-icons/fa";
import Breadcrumb from "@/components/common/Breadcrumb";
import site from "@/data/index";

export default function NotFound() {
  const data = site.notFound;
  const { pageTop, code, badge, title, description, buttons, quickLinksSection } = data;

  return (
    <main>
      {/* Top */}
      <Breadcrumb
        title={pageTop.title}
        breadcrumbCurrent={pageTop.breadcrumbCurrent}
      />

      {/* Content */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D89B33]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-[#D89B33]/10 border-2 border-[#D89B33]/30 flex items-center justify-center text-[#D89B33] text-4xl sm:text-5xl shadow-lg shadow-[#D89B33]/10 mb-6">
            <FaCompass />
          </div>

          {/* Number */}
          <div className="font-serif text-7xl sm:text-9xl font-black text-gray-900 tracking-tight leading-none select-none">
            {code.slice(0, 1)}<span className="text-[#D89B33]">{code.slice(1, 2)}</span>{code.slice(2)}
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D89B33]/10 text-gray-900 text-xs font-bold uppercase tracking-widest mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D89B33]" />
            <span>{badge}</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto mt-3 leading-relaxed font-sans">
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {buttons?.home && (
              <Link
                href={buttons.home.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D89B33] hover:bg-[#b88022] text-white font-bold text-sm transition-all shadow-md shadow-[#D89B33]/20"
              >
                <FaHome className="text-base" />
                <span>{buttons.home.text}</span>
              </Link>
            )}
            {buttons?.services && (
              <Link
                href={buttons.services.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-bold text-sm transition-all shadow-xs"
              >
                <FaTruck className="text-base text-[#D89B33]" />
                <span>{buttons.services.text}</span>
              </Link>
            )}
          </div>

          {/* Grid */}
          {quickLinksSection && quickLinksSection.links && (
            <div className="mt-14 pt-10 border-t border-gray-200/80 max-w-xl mx-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {quickLinksSection.title}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {quickLinksSection.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="p-3.5 rounded-xl bg-white hover:bg-[#F7F3E9] border border-gray-200 hover:border-[#D89B33]/40 text-xs font-bold text-gray-900 hover:text-[#D89B33] transition-all flex items-center justify-between shadow-xs"
                  >
                    <span>{link.title}</span>
                    <FaArrowRight className="text-xs text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
