import { Droplets, Waves, Toilet, Droplet, Bath, Wrench } from 'lucide-react';
import type { QuickProblem } from '../types/content';

export const quickProblems: QuickProblem[] = [
  { id: 'su-kacagi', label: 'Su kaçağı var', icon: Droplets },
  { id: 'gider-tikali', label: 'Gider tıkalı', icon: Waves },
  { id: 'klozet-arizasi', label: 'Klozet arızası', icon: Toilet },
  { id: 'musluk-damlatiyor', label: 'Musluk damlatıyor', icon: Droplet },
  { id: 'lavabo-tikali', label: 'Lavabo tıkalı', icon: Bath },
  { id: 'diger-tesisat-sorunu', label: 'Diğer tesisat sorunu', icon: Wrench },
];
