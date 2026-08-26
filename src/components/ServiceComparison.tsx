import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { getServiceBySlug } from '../data/services';

interface ComparisonRow {
  symptom: string;
  serviceSlug: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { symptom: 'Musluk damlatıyor', serviceSlug: 'musluk-batarya-degisimi' },
  { symptom: 'Tesisatta başka bir arıza var', serviceSlug: 'tesisat-ariza-onarim' },
  { symptom: 'Lavabo gitmiyor', serviceSlug: 'lavabo-evye-tikanikligi' },
  { symptom: 'Klozet taşıyor', serviceSlug: 'klozet-rezervuar-tamiri' },
  { symptom: 'Gömme rezervuar su kaçırıyor', serviceSlug: 'gomme-rezervuar-tamiri' },
  { symptom: 'Kombi montajı gerekiyor', serviceSlug: 'kombi-montaji' },
  {
    symptom: 'Doğalgaz tesisatında kaçak şüphesi var',
    serviceSlug: 'dogalgaz-tesisati-gaz-kacagi-tespiti',
  },
];

interface ServiceComparisonProps {
  /** Şu an görüntülenen hizmet, kendisiyle eşleşen satırı hafifçe işaretlemek için. */
  currentSlug?: string;
}

/**
 * "Emin değil misiniz?" karşılaştırma tablosu. Belirti → önerilen hizmet
 * eşlemesi tüm hizmet sayfalarında aynıdır; her hizmet sayfasının
 * ortasında gösterilir.
 */
export function ServiceComparison({ currentSlug }: ServiceComparisonProps) {
  const rows = COMPARISON_ROWS.map((row) => ({
    ...row,
    service: getServiceBySlug(row.serviceSlug),
  })).filter((row): row is ComparisonRow & { service: NonNullable<ReturnType<typeof getServiceBySlug>> } =>
    Boolean(row.service),
  );

  return (
    <section className="py-16 md:py-20" aria-labelledby="service-comparison-heading">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="service-comparison-heading" title="Emin değil misiniz?" />
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {rows.map((row) => (
            <Link
              key={row.serviceSlug}
              to={row.service.path}
              className="flex items-center justify-between gap-3 rounded-xl border border-border-light bg-white p-4 transition-colors hover:border-teal"
              aria-current={row.serviceSlug === currentSlug ? 'page' : undefined}
            >
              <span className="min-w-0">
                <span className="block text-sm text-ink/60">{row.symptom}</span>
                <span className="mt-0.5 block text-[15px] font-bold text-navy">
                  {row.service.shortTitle}
                </span>
              </span>
              <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
