import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/sections/HeroSection';
import { QuickProblemSelector } from '../components/sections/QuickProblemSelector';
import { TrustSection } from '../components/sections/TrustSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { CompletedWorksSection } from '../components/sections/CompletedWorksSection';
import { ServiceAreasSection } from '../components/sections/ServiceAreasSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';

const PAGE_TITLE = 'Tesisatçınız | Kağıthane, Şişli ve Beşiktaş Su Tesisatçısı';
const PAGE_DESCRIPTION =
  'Kağıthane, Şişli ve Beşiktaş’ta su kaçağı, gider tıkanıklığı, klozet, musluk ve tesisat onarımı için servis müsaitliğini öğrenin.';
const CANONICAL_URL = 'https://tesisatciniz.com/';
const OG_IMAGE_URL = 'https://tesisatciniz.com/og-image.svg';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE_URL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </Helmet>

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
