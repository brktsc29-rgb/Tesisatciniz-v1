import { Droplets, Waves, Toilet, Droplet, Bath, Wrench } from 'lucide-react';
import type { ServiceItem } from '../types/content';
import { business } from '../config/business';

const leakDetectionNote = business.capabilities.hasLeakDetectionDevice
  ? ' Gerekli görülen durumlarda cihaz destekli tespit yapılır.'
  : '';

export const services: ServiceItem[] = [
  {
    id: 'su-kacagi-tespiti',
    title: 'Su kaçağı tespiti',
    description: `Gizli su kaçaklarının yerinin belirlenmesi ve kaynağın doğru şekilde tespit edilmesi.${leakDetectionNote}`,
    icon: Droplets,
  },
  {
    id: 'gider-tikanikligi-acma',
    title: 'Gider tıkanıklığı açma',
    description: 'Mutfak, banyo ve tesisat giderlerindeki tıkanıklıkların açılması.',
    icon: Waves,
  },
  {
    id: 'klozet-rezervuar-tamiri',
    title: 'Klozet ve rezervuar tamiri',
    description: 'Klozet arızaları, rezervuar su kaçırma ve dolum sorunlarının giderilmesi.',
    icon: Toilet,
  },
  {
    id: 'musluk-batarya-degisimi',
    title: 'Musluk ve batarya değişimi',
    description: 'Damlatan veya arızalı musluk ile bataryaların onarımı ve değişimi.',
    icon: Droplet,
  },
  {
    id: 'lavabo-evye-tikanikligi',
    title: 'Lavabo ve evye tıkanıklığı',
    description: 'Lavabo ve evyelerde oluşan tıkanıklıkların temizlenmesi ve giderilmesi.',
    icon: Bath,
  },
  {
    id: 'tesisat-ariza-onarim',
    title: 'Tesisat arıza ve onarım',
    description: 'Boru, vana ve genel su tesisatı arızalarında onarım hizmeti.',
    icon: Wrench,
  },
];
