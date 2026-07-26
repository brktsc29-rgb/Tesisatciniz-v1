import type { NavMenuItem } from '../types/content';
import { services } from './services';
import { districts } from './districts';

export const primaryNavigation: NavMenuItem[] = [
  {
    label: 'Hizmetler',
    children: services.map((service) => ({ label: service.shortTitle, href: service.path })),
  },
  {
    label: 'Hizmet Bölgeleri',
    children: districts.map((district) => ({ label: district.name, href: district.path })),
  },
  { label: 'Nasıl Çalışıyoruz', href: '/#how-it-works' },
  { label: 'Hakkımızda', href: '/#about' },
  { label: 'İletişim', href: '/#contact' },
];
