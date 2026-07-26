import { Receipt, Target, Info, Sparkles, MapPin, Wrench } from 'lucide-react';
import type { TrustItem } from '../types/content';

export const trustItems: TrustItem[] = [
  {
    id: 'seffaf-fiyatlandirma',
    title: 'Şeffaf fiyatlandırma',
    description: 'Ücret, yapılacak işlem netleştikten sonra açıkça paylaşılır.',
    icon: Receipt,
  },
  {
    id: 'gereksiz-islem-onermeme',
    title: 'Gereksiz işlem önermiyoruz',
    description: 'Yalnızca gerçekten gerekli olan müdahale önerilir.',
    icon: Target,
  },
  {
    id: 'is-oncesi-bilgilendirme',
    title: 'İş başlamadan önce bilgilendirme',
    description: 'Yapılacak müdahale, işleme başlanmadan önce anlatılır.',
    icon: Info,
  },
  {
    id: 'temiz-calisma-prensibi',
    title: 'Temiz çalışma prensibi',
    description: 'Müdahale alanı korunur ve işlem sonrasında temiz bırakılır.',
    icon: Sparkles,
  },
  {
    id: 'yerel-bolge-deneyimi',
    title: 'Yerel bölge deneyimi',
    description: 'Kağıthane, Şişli ve Beşiktaş bölgelerine yönelik servis deneyimi.',
    icon: MapPin,
  },
  {
    id: 'iscilik-odakli-cozum',
    title: 'İşçilik odaklı çözüm',
    description: 'Odak, gereksiz parça değişimi yerine doğru işçilik üzerinedir.',
    icon: Wrench,
  },
];
