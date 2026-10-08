import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type MoverNewSchema = typeof siteData.MoverNew;
export type MoverNewSections = MoverNewSchema["sections"];
export type MoverNewTemplateComponents = MoverNewSchema["templateComponents"];

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
export type ServiceItem = MoverNewServicesData["servicesList"][number];
export type MoverNewCtaData = MoverNewSections["cta"]["variants"]["MoverNewCta1"];
export type MoverNewTeamData = MoverNewSections["team"]["variants"]["MoverNewTeam1"];
export type TeamMember = MoverNewTeamData["members"][number];
export type MoverNewWhyChooseUsData = MoverNewSections["whyChooseUs"]["variants"]["MoverNewWhyChooseUs1"];
export type MoverNewTestimonialsData = MoverNewSections["testimonials"]["variants"]["MoverNewTestimonials1"];
export type TestimonialItem = MoverNewTestimonialsData["testimonials"][number];
export type MoverNewBlogData = MoverNewSections["blog"]["variants"]["MoverNewBlog1"];
export type BlogPost = MoverNewBlogData["blogPosts"][number];
export type BlogDetailPageData = MoverNewBlogData["detailSidebar"];
export type MoverNewPageTopData = MoverNewSections["pageTopSection"]["variants"]["MoverNewPageTop1"];
export type MoverNewGetAQuoteData = MoverNewSections["getAQuote"]["variants"]["MoverNewGetAQuote1"];
export type MoverNewGalleryData = MoverNewSections["gallery"]["variants"]["MoverNewGallery1"];
export type GalleryItem = MoverNewGalleryData["items"][number];
export type MoverNewContactData = MoverNewSections["contact"]["variants"]["MoverNewContact1"];
export type ContactInfoCard = MoverNewContactData["infoCard"];

// ── Canonical Mapped Site Data Object ──
const sec = siteData.MoverNew.sections;

const servicesVariant = sec.services.variants.MoverNewServices1;
const servicesMapped = {
  ...servicesVariant,
  list: servicesVariant.servicesList,
  ServiceItem: servicesVariant.servicesList,
  services: servicesVariant.servicesList,
  servicesList: servicesVariant.servicesList,
};

const blogVariant = sec.blog.variants.MoverNewBlog1;
const blogMapped = {
  ...blogVariant,
  posts: blogVariant.blogPosts,
  blogPosts: blogVariant.blogPosts,
  detailPage: blogVariant.detailSidebar,
};

const siteMap = {
  topbar: sec.topbar.variants.MoverNewTopbar1,
  navbar: sec.navbar.variants.MoverNewNavbar1,
  navItems: sec.navbar.variants.MoverNewNavbar1.navItems,
  footer: sec.footer.variants.MoverNewFooter1,

  hero: sec.hero.variants.MoverNewHero1,
  about: sec.about.variants.MoverNewAbout1,
  services: servicesMapped,
  cta: sec.cta.variants.MoverNewCta1,
  team: sec.team.variants.MoverNewTeam1,
  whyChooseUs: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
  testimonials: sec.testimonials.variants.MoverNewTestimonials1,
  blog: blogMapped,
  pageTopSection: sec.pageTopSection.variants.MoverNewPageTop1,
  getAQuote: sec.getAQuote.variants.MoverNewGetAQuote1,
  gallery: sec.gallery.variants.MoverNewGallery1,
  contact: sec.contact.variants.MoverNewContact1,

  // Compatibility object so existing components importing `siteData.home.hero` don't break
  home: {
    hero: sec.hero.variants.MoverNewHero1,
    about: sec.about.variants.MoverNewAbout1,
    services: servicesMapped,
    cta: sec.cta.variants.MoverNewCta1,
    team: sec.team.variants.MoverNewTeam1,
    whyChooseUs: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
    testimonials: sec.testimonials.variants.MoverNewTestimonials1,
    blog: blogMapped,
  },

  // Root Tree
  MoverNew: siteData.MoverNew,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
