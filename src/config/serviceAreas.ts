import { districts } from '../data/districts';

export interface ServiceAreaNeighborhood {
  name: string;
  slug: string;
}

export interface ServiceAreaDistrict {
  districtSlug: string;
  districtName: string;
  neighborhoods: ServiceAreaNeighborhood[];
}

const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: 'c',
  Ç: 'c',
  ğ: 'g',
  Ğ: 'g',
  ı: 'i',
  I: 'i',
  İ: 'i',
  ö: 'o',
  Ö: 'o',
  ş: 's',
  Ş: 's',
  ü: 'u',
  Ü: 'u',
};

function slugifyNeighborhood(name: string): string {
  const asciiName = name
    .split('')
    .map((char) => TURKISH_CHAR_MAP[char] ?? char)
    .join('');
  return asciiName
    .toLocaleLowerCase('tr')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * İlçe → mahalle listelerinin tek kaynağı. districts.ts'teki mevcut
 * `neighborhoods` (chip gösterimi) listesinden türetilir; ayrı bir veri
 * seti olarak tekrar yazılmaz. Şu an hiçbir UI bileşeni tarafından
 * kullanılmıyor — ileride mahalle bazlı sayfalar eklenirse, buradaki
 * `slug` alanları route path'i olarak kullanılabilecek şekilde hazırdır.
 */
export const serviceAreaDistricts: ServiceAreaDistrict[] = districts.map((district) => ({
  districtSlug: district.slug,
  districtName: district.name,
  neighborhoods: district.neighborhoods.map((name) => ({
    name,
    slug: slugifyNeighborhood(name),
  })),
}));
