import { ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { ContactButton } from '../ui/ContactButton';
import { ResponsiveImage } from '../ui/ResponsiveImage';

interface PageHeroImage {
  src?: string;
  alt: string;
  placeholderIcon: LucideIcon;
  placeholderTone: 'navy' | 'blue' | 'teal';
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: PageHeroImage;
  /** Sağlanırsa CTA'ların altında küçük bir bilgi kutusu gösterilir. */
  infoBoxText?: string;
}

/**
 * Hizmet ve ilçe sayfalarında kullanılan genel hero şablonu. Ana sayfanın
 * kendi HeroSection'ı değiştirilmez; bu bileşen yalnızca yeni sayfa
 * türleri için paylaşılan bir düzendir.
 */
export function PageHero({ eyebrow, title, description, image, infoBoxText }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-white to-surface py-8 md:py-16">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-x-12 md:gap-y-8">
        <div className="flex flex-col gap-3 md:col-start-1 md:row-start-1 md:gap-4">
          <span className="text-sm font-bold tracking-wider text-blue uppercase">{eyebrow}</span>
          <h1 className="text-[32px] leading-[1.15] font-extrabold text-navy sm:text-[36px] md:text-[42px]">
            {title}
          </h1>
          <p className="text-base leading-snug text-ink/80 md:leading-relaxed md:text-lg">
            {description}
          </p>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <ResponsiveImage
            src={image.src}
            alt={image.alt}
            width={720}
            height={480}
            rounded="2xl"
            loading="eager"
            fetchPriority="high"
            placeholderIcon={image.placeholderIcon}
            placeholderTone={image.placeholderTone}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-3 md:col-start-1 md:row-start-2">
          <div className="hidden flex-col gap-3 md:flex">
            <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
            <ContactButton kind="whatsapp" label="WhatsApp’tan Fotoğraf Gönder" fullWidth />
          </div>

          {infoBoxText ? (
            <div className="flex items-center gap-2.5 rounded-xl border border-border-light bg-white px-4 py-2.5 shadow-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              </span>
              <p className="text-[13px] leading-snug text-ink/80">{infoBoxText}</p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
