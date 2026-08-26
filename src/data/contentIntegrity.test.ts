import { describe, expect, it } from 'vitest';
import { business } from '../config/business';
import { districts } from './districts';
import { services } from './services';

describe('iletişim yapılandırması', () => {
  it('telefon ve WhatsApp bağlantılarını aynı numaradan üretir', () => {
    expect(business.phoneDisplay).toBe('+90 535 982 76 86');
    expect(business.phoneHref).toBe('tel:+905359827686');
    expect(business.whatsappNumber).toBe('905359827686');
  });
});

describe('içerik bütünlüğü', () => {
  it('tüm slug ve rotaları benzersiz tutar', () => {
    const slugs = [
      ...services.map((service) => service.slug),
      ...districts.map((district) => district.slug),
    ];
    const paths = [
      ...services.map((service) => service.path),
      ...districts.map((district) => district.path),
    ];

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('ilişkili hizmetlerin mevcut sluglara işaret etmesini sağlar', () => {
    const serviceSlugs = new Set(services.map((service) => service.slug));

    for (const service of services) {
      for (const relatedSlug of service.relatedServices) {
        expect(serviceSlugs.has(relatedSlug)).toBe(true);
        expect(relatedSlug).not.toBe(service.slug);
      }
    }
  });

  it('doğalgaz hizmetinde SEO ve acil güvenlik bilgisini zorunlu tutar', () => {
    const naturalGasService = services.find(
      (service) => service.slug === 'dogalgaz-tesisati-gaz-kacagi-tespiti',
    );

    expect(naturalGasService?.path).toBe('/dogalgaz-tesisati-gaz-kacagi-tespiti');
    expect(naturalGasService?.seoTitle).toContain('Gaz Kaçağı Tespiti');
    expect(naturalGasService?.metaDescription).toContain('187');
    expect(naturalGasService?.infoBox?.action?.href).toBe('tel:187');
    expect(naturalGasService?.faq.some((item) => item.answer.includes('187'))).toBe(true);
  });

  it('gömme rezervuar hizmetinin rota ve SEO içeriğini eksiksiz tutar', () => {
    const concealedCisternService = services.find(
      (service) => service.slug === 'gomme-rezervuar-tamiri',
    );

    expect(concealedCisternService?.path).toBe('/gomme-rezervuar-tamiri');
    expect(concealedCisternService?.seoTitle).toContain('Gömme Rezervuar Tamiri');
    expect(concealedCisternService?.metaDescription).toContain('Kağıthane');
    expect(concealedCisternService?.metaDescription.length).toBeLessThanOrEqual(160);
    expect(concealedCisternService?.faq.length).toBeGreaterThanOrEqual(4);
    expect(concealedCisternService?.relatedServices).toContain('klozet-rezervuar-tamiri');
  });
});
