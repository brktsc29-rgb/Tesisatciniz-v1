import type { NavMenuItem } from '../types/content';
import { services } from './services';
import { districts } from './districts';
import { ROUTES } from '../config/routes';

export const primaryNavigation: NavMenuItem[] = [
  {
    label: 'Hizmetler',
    children: services.map((service) => ({ label: service.shortTitle, href: service.path })),
  },
  {
    label: 'Hizmet Bölgeleri',
    children: districts.map((district) => ({ label: district.name, href: district.path })),
  },
  { label: 'Nasıl Çalışıyoruz', href: ROUTES.homeSection.howItWorks },
  { label: 'Hakkımızda', href: ROUTES.homeSection.about },
  { label: 'İletişim', href: ROUTES.homeSection.contact },
];
