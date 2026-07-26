import { Clock, ShieldCheck, Target, Sparkles } from 'lucide-react';
import type { TrustItem } from '../types/content';

export const trustItems: TrustItem[] = [
  {
    id: 'hizli-geri-donus',
    title: 'Hızlı geri dönüş',
    description: 'Talebinizi inceleyip mümkün olan en kısa sürede dönüş yapalım.',
    icon: Clock,
  },
  {
    id: 'is-oncesi-bilgi',
    title: 'İş öncesi bilgi',
    description: 'Yapılacak müdahale ve ücret hakkında önceden bilgi verilir.',
    icon: ShieldCheck,
  },
  {
    id: 'gercek-ihtiyac-odakli',
    title: 'Gerçek ihtiyaç odaklı',
    description: 'Gereksiz işlem veya değişim önerilmez.',
    icon: Target,
  },
  {
    id: 'temiz-calisma',
    title: 'Temiz çalışma',
    description: 'Müdahale alanı mümkün olduğunca korunur ve temiz bırakılır.',
    icon: Sparkles,
  },
];
