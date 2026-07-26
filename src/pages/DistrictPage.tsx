import { MapPinned } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { PageHero } from '../components/sections/PageHero';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckList } from '../components/ui/CheckList';
import { NeighborhoodChips } from '../components/ui/NeighborhoodChips';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { ServiceCard } from '../components/ui/ServiceCard';
import { DistrictCard } from '../components/ui/DistrictCard';
import { FinalCTA } from '../components/sections/FinalCTA';
import { services } from '../data/services';
import { districts } from '../data/districts';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '../lib/structuredData';
import type { District } from '../types/district';
import type { BreadcrumbTrailItem } from '../types/seo';

const IMAGE_TONES = ['navy', 'blue', 'teal'] as const;

interface DistrictPageProps {
  district: District;
}

export function DistrictPage({ district }: DistrictPageProps) {
  const districtIndex = districts.findIndex((item) => item.slug === district.slug);
  const imageTone = IMAGE_TONES[districtIndex % IMAGE_TONES.length] ?? 'navy';
  const nearbyDistricts = districts.filter((item) => item.slug !== district.slug);

  const breadcrumbItems: BreadcrumbTrailItem[] = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Hizmet Bölgeleri', path: '/#service-areas' },
    { label: district.name, path: district.path },
  ];

  const structuredData = [
    buildJsonLdGraph([
      buildWebSiteSchema(),
      buildOrganizationSchema(),
      buildBreadcrumbSchema(breadcrumbItems),
      buildFaqSchema(district.faq),
    ]),
  ];

  return (
    <>
      <SEOHead
        title={district.seoTitle}
        description={district.metaDescription}
        canonical={district.path}
        structuredData={structuredData}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <PageHero
        eyebrow="Hizmet Bölgesi"
        title={district.heroTitle}
        description={district.heroDescription}
        image={{
          src: `/images/districts/${district.slug}/hero.jpg`,
          alt: `${district.name} hizmet bölgesi`,
          placeholderIcon: MapPinned,
          placeholderTone: imageTone,
        }}
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink/80 md:text-lg">{district.intro}</p>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="neighborhoods-heading">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            id="neighborhoods-heading"
            align="left"
            title="Öne çıkan mahalleler"
            className="items-start text-left"
          />
          <NeighborhoodChips neighborhoods={district.neighborhoods} />
        </Container>
      </section>

      <section className="bg-blue/5 py-16 md:py-20" aria-labelledby="common-needs-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id="common-needs-heading"
            title="Bölgede sık karşılaşılabilecek tesisat ihtiyaçları"
          />
          <CheckList items={district.commonNeeds} />
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="serving-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="serving-heading"
            align="left"
            title="Nasıl hizmet veriliyor?"
            className="items-start text-left"
          />
          <div className="mt-6 flex flex-col gap-4">
            {district.servingDescription.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blue/5 py-16 md:py-20" aria-labelledby="district-services-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id="district-services-heading"
            title="Hizmetlerimiz"
            description={`${district.name} bölgesinde verilen tüm hizmetleri inceleyin.`}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="nearby-districts-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="nearby-districts-heading" title="Yakın ilçeler" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {nearbyDistricts.map((nearby) => (
              <DistrictCard
                key={nearby.slug}
                slug={nearby.slug}
                name={nearby.name}
                description={nearby.intro}
                href={nearby.path}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="district-faq-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id="district-faq-heading"
            title={`${district.name} Hakkında Sık Sorulan Sorular`}
          />
          <FaqAccordion items={district.faq} idPrefix={`district-${district.slug}`} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
