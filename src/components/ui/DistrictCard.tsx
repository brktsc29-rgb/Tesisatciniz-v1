import { Link } from 'react-router-dom';
import { ArrowRight, MapPinned } from 'lucide-react';
import { ResponsiveImage } from './ResponsiveImage';

interface DistrictCardProps {
  name: string;
  description: string;
  href: string;
}

/** Koyu, fotoğraf-üstü kaplamalı ilçe kartı. Ana sayfa ve ilçe sayfaları arasında paylaşılır. */
export function DistrictCard({ name, description, href }: DistrictCardProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[3/4]">
      <ResponsiveImage
        alt={`${name} bölgesi`}
        width={400}
        height={500}
        rounded="2xl"
        placeholderIcon={MapPinned}
        placeholderTone="navy"
        className="absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/10"
      />
      <div className="relative flex h-full flex-col justify-end gap-2 p-5">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-white/85">{description}</p>
        <Link
          to={href}
          aria-label={`${name} bölgesini incele`}
          className="mt-2 flex h-10 w-10 items-center justify-center self-end rounded-full bg-white text-navy transition-transform duration-150 hover:scale-105"
        >
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
