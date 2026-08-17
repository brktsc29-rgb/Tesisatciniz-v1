import type { DistrictCoordinates } from '../../types/district';
import { cn } from '../../lib/cn';

interface DistrictMapProps {
  name: string;
  coordinates: DistrictCoordinates;
  className?: string;
}

const LAT_SPAN = 0.018;
const LNG_SPAN = 0.024;

/**
 * OpenStreetMap'in resmi embed widget'ı üzerinden ilçe konumunu gösterir.
 * API anahtarı gerektirmez; harita verisi ve atıf (© OpenStreetMap
 * contributors) widget'ın kendisi tarafından sağlanır.
 */
export function DistrictMap({ name, coordinates, className }: DistrictMapProps) {
  const { lat, lng } = coordinates;
  const bbox = [lng - LNG_SPAN, lat - LAT_SPAN, lng + LNG_SPAN, lat + LAT_SPAN].join(',');
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div
      className={cn('overflow-hidden rounded-2xl border border-border-light', className)}
      style={{ aspectRatio: '720 / 480' }}
    >
      <iframe
        title={`${name} hizmet bölgesi haritası`}
        src={src}
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  );
}
