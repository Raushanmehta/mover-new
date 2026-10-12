import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type MoverNewSchema = typeof siteData.MoverNew;
export type MoverNewSections = MoverNewSchema["sections"];
export type MoverNewTemplateComponents = MoverNewSchema["templateComponents"];

// Reference schema convention aliases
export type ServicesSchema = MoverNewSchema;
export type ServicesSections = MoverNewSections;

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type MoverNewTopbarData = MoverNewSections["topbar"]["variants"]["MoverNewTopbar1"];
export type MoverNewNavbarData = MoverNewSections["navbar"]["variants"]["MoverNewNavbar1"];
export type MoverNewNavItemsData = MoverNewNavbarData["navItems"];
export type MoverNewFooterData = MoverNewSections["footer"]["variants"]["MoverNewFooter1"];
export type MoverNewHeroData = MoverNewSections["hero"]["variants"]["MoverNewHero1"];
export type MoverNewAboutData = MoverNewSections["about"]["variants"]["MoverNewAbout1"];
export type MoverNewServicesData = MoverNewSections["services"]["variants"]["MoverNewServices1"];
export type MoverNewCtaData = MoverNewSections["cta"]["variants"]["MoverNewCta1"];
export type MoverNewTeamData = MoverNewSections["team"]["variants"]["MoverNewTeam1"];
export type MoverNewWhyChooseUsData = MoverNewSections["whyChooseUs"]["variants"]["MoverNewWhyChooseUs1"];
export type MoverNewTestimonialData = MoverNewSections["testimonials"]["variants"]["MoverNewTestimonials1"];
export type MoverNewTestimonialsData = MoverNewTestimonialData;
export type MoverNewBlogData = MoverNewSections["blog"]["variants"]["MoverNewBlog1"];
export type MoverNewPageTopData = MoverNewSections["pageTopSection"]["variants"]["MoverNewPageTop1"];
export type MoverNewGetAQuoteData = MoverNewSections["getAQuote"]["variants"]["MoverNewGetAQuote1"];
export type MoverNewGalleryData = MoverNewSections["gallery"]["variants"]["MoverNewGallery1"];
export type MoverNewContactData = MoverNewSections["contact"]["variants"]["MoverNewContact1"];
export type MoverNewThankYouData = MoverNewSections["thankYou"]["variants"]["MoverNewThankYou1"];
export type MoverNewNotFoundData = MoverNewSections["notFound"]["variants"]["MoverNewNotFound1"];

// Optional item types
export type NavItem = MoverNewNavbarData["navItems"][number];
export type ServiceItem = MoverNewServicesData["servicesList"][number];
export type TeamMember = MoverNewTeamData["members"][number];
export type WhyChooseUsItem = MoverNewWhyChooseUsData["features"][number];
export type TestimonialItem = MoverNewTestimonialsData["testimonials"][number];
export type BlogPost = MoverNewBlogData["blogPosts"][number];
export type BlogDetailPageData = MoverNewBlogData["detailSidebar"];
export type GalleryItem = MoverNewGalleryData["items"][number];
export type ContactInfoCard = MoverNewContactData["infoCard"];

// ── Canonical Mapped Site Data Object ──
const sec = siteData.MoverNew.sections;

export const siteMap = {
  // Compatibility section shortcuts
  topbar: sec.topbar.variants.MoverNewTopbar1,
  navbar: sec.navbar.variants.MoverNewNavbar1,
  navItems: sec.navbar.variants.MoverNewNavbar1.navItems,
  footer: sec.footer.variants.MoverNewFooter1,
  hero: sec.hero.variants.MoverNewHero1,
  about: sec.about.variants.MoverNewAbout1,
  services: sec.services.variants.MoverNewServices1,
  cta: sec.cta.variants.MoverNewCta1,
  team: sec.team.variants.MoverNewTeam1,
  whyChooseUs: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
  testimonial: sec.testimonials.variants.MoverNewTestimonials1,
  testimonials: sec.testimonials.variants.MoverNewTestimonials1,
  blog: sec.blog.variants.MoverNewBlog1,
  pageTopSection: sec.pageTopSection.variants.MoverNewPageTop1,
  getAQuote: sec.getAQuote.variants.MoverNewGetAQuote1,
  gallery: sec.gallery.variants.MoverNewGallery1,
  contact: sec.contact.variants.MoverNewContact1,
  thankYou: sec.thankYou.variants.MoverNewThankYou1,
  notFound: sec.notFound.variants.MoverNewNotFound1,

  // Compatibility section shortcuts
  topbarData: sec.topbar.variants.MoverNewTopbar1,
  navbarData: sec.navbar.variants.MoverNewNavbar1,
  footerData: sec.footer.variants.MoverNewFooter1,
  heroData: sec.hero.variants.MoverNewHero1,
  aboutData: sec.about.variants.MoverNewAbout1,
  servicesData: sec.services.variants.MoverNewServices1,
  ctaData: sec.cta.variants.MoverNewCta1,
  teamData: sec.team.variants.MoverNewTeam1,
  whyChooseUsData: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
  testimonialData: sec.testimonials.variants.MoverNewTestimonials1,
  testimonialsData: sec.testimonials.variants.MoverNewTestimonials1,
  blogData: sec.blog.variants.MoverNewBlog1,
  pageTopSectionData: sec.pageTopSection.variants.MoverNewPageTop1,
  getAQuoteData: sec.getAQuote.variants.MoverNewGetAQuote1,
  galleryData: sec.gallery.variants.MoverNewGallery1,
  contactData: sec.contact.variants.MoverNewContact1,
  thankYouData: sec.thankYou.variants.MoverNewThankYou1,
  notFoundData: sec.notFound.variants.MoverNewNotFound1,

  // Root Tree
  MoverNew: siteData.MoverNew,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
