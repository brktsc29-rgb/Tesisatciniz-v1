import { PhoneCall, MessageSquare, CalendarClock, CheckCircle } from 'lucide-react';

export interface ProcessStepContent {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStepContent[];
}

const STEP_ICONS = [PhoneCall, MessageSquare, CalendarClock, CheckCircle];

/**
 * "Nasıl çalışıyoruz" dört adımlı numaralı düzeni. Ana sayfada ve hizmet
 * sayfalarında aynı görsel şablonu kullanmak için paylaşılan bileşen;
 * adım ikonları sabit ve evrenseldir (iletişim, aktarım, planlama, onay),
 * yalnızca başlık/açıklama metinleri veri üzerinden değişir.
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-6">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[18px] hidden border-t-2 border-dashed border-border-light md:block"
      />
      {steps.map((step, index) => {
        const Icon = STEP_ICONS[index % STEP_ICONS.length];
        return (
          <li key={step.title} className="relative flex flex-col items-start gap-3">
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
              {index + 1}
            </span>
            {Icon ? <Icon aria-hidden="true" className="h-6 w-6 text-navy" /> : null}
            <h3 className="text-[15px] font-bold text-navy">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink/75">{step.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
