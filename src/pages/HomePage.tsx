import { SEOHead } from '../components/seo/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { QuickProblemSelector } from '../components/sections/QuickProblemSelector';
import { TrustSection } from '../components/sections/TrustSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { CompletedWorksSection } from '../components/sections/CompletedWorksSection';
import { ServiceAreasSection } from '../components/sections/ServiceAreasSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { faqItems } from '../data/faqs';
import { seo } from '../config/seo';
import { ROUTES } from '../config/routes';
import {
  buildFaqSchema,
  buildJsonLdGraph,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '../lib/structuredData';

export function HomePage() {
  const structuredData = [
    buildJsonLdGraph([buildWebSiteSchema(), buildOrganizationSchema(), buildFaqSchema(faqItems)]),
  ];

  return (
    <>
      <SEOHead
        title={seo.defaultTitle}
        description={seo.defaultDescription}
        canonical={ROUTES.home}
        structuredData={structuredData}
      />

      <HeroSection />
      <QuickProblemSelector />
      <TrustSection />
      <ServicesSection />
      <HowItWorksSection />
      <CompletedWorksSection />
      <ServiceAreasSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
