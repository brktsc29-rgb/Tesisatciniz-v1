import { ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { ContactButton } from '../ui/ContactButton';
import { ResponsiveImage } from '../ui/ResponsiveImage';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-mt-20 bg-gradient-to-b from-white to-surface py-12 md:py-20"
    >
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-x-12 md:gap-y-8">
        <div className="flex flex-col gap-4 md:col-start-1 md:row-start-1">
          <span className="text-sm font-bold tracking-wider text-blue uppercase">
            Kağıthane • Şişli • Beşiktaş
          </span>
          <h1
            id="hero-heading"
            className="text-[38px] leading-[1.12] font-extrabold text-navy sm:text-[42px] md:text-[48px]"
          >
            Su tesisatı sorunlarında{' '}
            <span className="text-blue">güvenilir ve kontrollü müdahale</span>
          </h1>
          <p className="text-base leading-relaxed text-ink/80 md:text-lg">
            Su kaçağı, gider tıkanıklığı, klozet arızası ve diğer tesisat sorunlarında servis
            durumunu öğrenmek için arayın veya sorunun fotoğrafını WhatsApp’tan gönderin.
          </p>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <ResponsiveImage
            alt="Su tesisatı arızasında çalışan tesisatçı"
            width={800}
            height={600}
            rounded="2xl"
            loading="eager"
            fetchPriority="high"
            placeholderIcon={ShieldCheck}
            placeholderTone="navy"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-4 md:col-start-1 md:row-start-2">
          <div className="flex flex-col gap-3">
            <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
            <ContactButton kind="whatsapp" label="WhatsApp’tan Fotoğraf Gönder" fullWidth />
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border-light bg-white px-5 py-4 shadow-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-ink/80">
              İşleme başlanmadan önce yapılacak müdahale ve ücret hakkında bilgi verilir.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
