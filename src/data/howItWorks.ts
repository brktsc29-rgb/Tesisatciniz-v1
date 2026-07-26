import { PhoneCall, MessageSquare, CalendarClock, CheckCircle } from 'lucide-react';
import type { HowItWorksStep } from '../types/content';

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'bize-ulasin',
    step: 1,
    title: 'Bize ulaşın',
    description: 'Telefonla arayın veya WhatsApp’tan fotoğraf gönderin.',
    icon: PhoneCall,
  },
  {
    id: 'sorunu-anlatin',
    step: 2,
    title: 'Sorunu anlatın',
    description: 'Arızayı, konumu ve mümkünse görselleri paylaşın.',
    icon: MessageSquare,
  },
  {
    id: 'musaitlik-ogrenin',
    step: 3,
    title: 'Müsaitlik öğrenin',
    description: 'Ustanın programına göre uygun servis zamanı belirlenir.',
    icon: CalendarClock,
  },
  {
    id: 'onay-sonrasi-islem',
    step: 4,
    title: 'Onay sonrası işlem',
    description: 'Müdahale ve ücret bilgisi verildikten sonra onayınızla işleme başlanır.',
    icon: CheckCircle,
  },
];
