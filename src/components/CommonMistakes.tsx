import { CircleX } from 'lucide-react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';

interface CommonMistakesProps {
  mistakes: string[];
}

/** "Kullanıcıların en sık yaptığı hatalar" — her hizmet sayfasında veri odaklı gösterilir. */
export function CommonMistakes({ mistakes }: CommonMistakesProps) {
  if (mistakes.length === 0) return null;

  return (
    <section className="py-16 md:py-20" aria-labelledby="common-mistakes-heading">
      <Container className="max-w-3xl">
        <SectionHeading
          id="common-mistakes-heading"
          align="left"
          title="Kullanıcıların en sık yaptığı hatalar"
          className="items-start text-left"
        />
        <ul className="mt-6 flex flex-col gap-3">
          {mistakes.map((mistake) => (
            <li
              key={mistake}
              className="flex items-start gap-3 rounded-xl border border-border-light bg-white p-4"
            >
              <CircleX aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <span className="text-[15px] leading-snug text-ink/85">{mistake}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
