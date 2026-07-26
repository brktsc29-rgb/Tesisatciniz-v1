import { Container } from '../ui/Container';
import { ContactButton } from '../ui/ContactButton';

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="final-cta-heading" className="scroll-mt-20 bg-navy py-16 md:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 id="final-cta-heading" className="max-w-xl text-[28px] leading-tight font-extrabold text-white md:text-[36px]">
          Tesisat sorununuzu fotoğrafla anlatın
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          Sorunun fotoğrafını veya kısa videosunu WhatsApp’tan gönderin. Servis müsaitliği ve
          yapılabilecek işlem hakkında ön bilgi alın.
        </p>
        <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-md sm:flex-row">
          <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
          <ContactButton kind="whatsapp" label="WhatsApp’tan Fotoğraf Gönder" fullWidth />
        </div>
      </Container>
    </section>
  );
}
