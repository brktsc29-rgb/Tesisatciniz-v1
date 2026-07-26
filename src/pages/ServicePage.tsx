import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { PageHero } from '../components/sections/PageHero';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProcessSteps } from '../components/ui/ProcessSteps';
import { CheckList } from '../components/ui/CheckList';
import { InfoCallout } from '../components/ui/InfoCallout';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { FinalCTA } from '../components/sections/FinalCTA';
import { RelatedServices } from '../components/RelatedServices';
import { ServiceComparison } from '../components/ServiceComparison';
import { ServicePrevNext } from '../components/ServicePrevNext';
import { CommonMistakes } from '../components/CommonMistakes';
import { districts } from '../data/districts';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildJsonLdGraph,
  buildOrganizationSchema,
  buildServiceSchema,
  buildWebSiteSchema,
} from '../lib/structuredData';
import { ROUTES } from '../config/routes';
import type { Service } from '../types/service';
import type { BreadcrumbTrailItem } from '../types/seo';

const PRICING_ASSURANCE =
  'Kesin ücret, yapılacak işlem ve gerekli malzeme netleştikten sonra müşteriye açıklanır.';

interface ServicePageProps {
  service: Service;
}

export function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon;

  const breadcrumbItems: BreadcrumbTrailItem[] = [
    { label: 'Ana Sayfa', path: ROUTES.home },
    { label: 'Hizmetler', path: ROUTES.homeSection.services },
    { label: service.shortTitle, path: service.path },
  ];

  const structuredData = [
    buildJsonLdGraph([
      buildWebSiteSchema(),
      buildOrganizationSchema(),
      buildBreadcrumbSchema(breadcrumbItems),
      buildServiceSchema(service),
      buildFaqSchema(service.faq),
    ]),
  ];

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonical={service.path}
        structuredData={structuredData}
      />

      <Breadcrumbs items={breadcrumbItems} />
      <ServicePrevNext currentSlug={service.slug} />

      <PageHero
        eyebrow="Kağıthane • Şişli • Beşiktaş"
        title={service.heroTitle}
        description={service.heroDescription}
        image={service.image}
        infoBoxText="İşleme başlanmadan önce yapılacak müdahale ve ücret hakkında bilgi verilir."
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink/80 md:text-lg">{service.intro}</p>
        </Container>
      </section>

      {service.infoBox ? (
        <section className="pb-16 md:pb-20">
          <Container className="max-w-3xl">
            <div className="rounded-2xl border border-blue/20 bg-blue/5 p-6">
              <h2 className="text-base font-bold text-navy">{service.infoBox.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80 md:text-[15px]">
                {service.infoBox.description}
              </p>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 md:py-20" aria-labelledby="symptoms-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="symptoms-heading" title="Hangi durumlarda bu hizmet gerekir?" />
          <CheckList items={service.symptoms.map((symptom) => symptom.label)} />
          {service.miniCallouts[0] ? (
            <InfoCallout
              variant={service.miniCallouts[0].variant}
              text={service.miniCallouts[0].text}
              className="mx-auto w-full max-w-2xl"
            />
          ) : null}
        </Container>
      </section>

      <section className="bg-blue/5 py-16 md:py-20" aria-labelledby="before-service-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="before-service-heading"
            align="left"
            title="Hizmet öncesinde bilmeniz gerekenler"
            className="items-start text-left"
          />
          <div className="mt-6">
            <CheckList items={service.beforeServiceNotes} />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="process-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="process-heading" title="Nasıl çalışıyoruz?" />
          <ProcessSteps steps={service.processSteps} />
        </Container>
      </section>

      <ServiceComparison currentSlug={service.slug} />

      <div className="bg-blue/5">
        <CommonMistakes mistakes={service.commonMistakes} />
      </div>

      <section className="py-16 md:py-20" aria-labelledby="pricing-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="pricing-heading"
            align="left"
            title="Fiyatı etkileyen unsurlar"
            className="items-start text-left"
          />
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {service.pricingFactors.map((factor) => (
              <li key={factor} className="flex items-center gap-2.5 text-[15px] text-ink/85">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                {factor}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink/70">{PRICING_ASSURANCE}</p>
          {service.miniCallouts[1] ? (
            <InfoCallout
              variant={service.miniCallouts[1].variant}
              text={service.miniCallouts[1].text}
              className="mt-6"
            />
          ) : null}
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="service-areas-heading">
        <Container className="flex flex-col gap-8">
          <SectionHeading id="service-areas-heading" title="Hizmet verilen bölgeler" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {districts.map((district) => (
              <Link
                key={district.slug}
                to={district.path}
                className="rounded-xl border border-border-light bg-white p-4 text-center transition-colors hover:border-teal"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="mt-3 block text-[15px] font-bold text-navy">
                  {district.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <RelatedServices currentSlug={service.slug} />

      <section className="py-16 md:py-20" aria-labelledby="after-service-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="after-service-heading"
            align="left"
            title="Hizmet sonrası öneriler"
            className="items-start text-left"
          />
          <div className="mt-6">
            <CheckList items={service.afterServiceTips} />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="service-faq-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            id="service-faq-heading"
            title={`${service.shortTitle} Hakkında Sık Sorulan Sorular`}
          />
          <FaqAccordion items={service.faq} idPrefix={`service-${service.slug}`} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
