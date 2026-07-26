import { Droplets, Waves, Toilet, Droplet, Bath, Wrench } from 'lucide-react';
import type { QuickProblem } from '../types/content';

export const quickProblems: QuickProblem[] = [
  { id: 'su-kacagi', label: 'Su kaçağı var', icon: Droplets, href: '/su-kacagi-tespiti' },
  { id: 'gider-tikali', label: 'Gider tıkalı', icon: Waves, href: '/gider-tikanikligi-acma' },
  { id: 'klozet-arizasi', label: 'Klozet arızası', icon: Toilet, href: '/klozet-rezervuar-tamiri' },
  {
    id: 'musluk-damlatiyor',
    label: 'Musluk damlatıyor',
    icon: Droplet,
    href: '/musluk-batarya-degisimi',
  },
  { id: 'lavabo-tikali', label: 'Lavabo tıkalı', icon: Bath, href: '/lavabo-evye-tikanikligi' },
  {
    id: 'diger-tesisat-sorunu',
    label: 'Diğer tesisat sorunu',
    icon: Wrench,
    href: '/tesisat-ariza-onarim',
  },
];
