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
import {
  buildFaqSchema,
  buildJsonLdGraph,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '../lib/structuredData';

const PAGE_TITLE = 'Tesisatçınız | Kağıthane, Şişli ve Beşiktaş Su Tesisatçısı';
const PAGE_DESCRIPTION =
  'Kağıthane, Şişli ve Beşiktaş’ta su kaçağı, gider tıkanıklığı, klozet, musluk ve tesisat onarımı için servis müsaitliğini öğrenin.';

export function HomePage() {
  const structuredData = [
    buildJsonLdGraph([buildWebSiteSchema(), buildOrganizationSchema(), buildFaqSchema(faqItems)]),
  ];

  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical="/"
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
