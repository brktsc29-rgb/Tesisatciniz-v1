import { Container } from '../ui/Container';
import { Skeleton } from '../ui/Skeleton';

/** Breadcrumbs bileşeninin yerini tutan ince şerit. */
export function BreadcrumbSkeleton() {
  return (
    <div className="border-b border-border-light bg-surface py-3">
      <Container>
        <Skeleton className="h-3.5 w-56" />
      </Container>
    </div>
  );
}

/** PageHero düzeninin (hizmet ve ilçe sayfaları) yerini tutan skeleton. */
export function PageHeroSkeleton() {
  return (
    <section className="bg-gradient-to-b from-white to-surface py-8 md:py-16">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-x-12 md:gap-y-8">
        <div className="flex flex-col gap-3 md:col-start-1 md:row-start-1 md:gap-4">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-9 w-full max-w-md" />
          <Skeleton className="h-9 w-3/4 max-w-sm" />
          <Skeleton className="mt-2 h-4 w-full max-w-lg" />
          <Skeleton className="h-4 w-2/3 max-w-md" />
        </div>
        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <Skeleton className="aspect-[3/2] w-full rounded-2xl" />
        </div>
        <div className="hidden flex-col gap-3 md:col-start-1 md:row-start-2 md:flex">
          <Skeleton className="h-[52px] w-full rounded-full" />
          <Skeleton className="h-[52px] w-full rounded-full" />
        </div>
      </Container>
    </section>
  );
}

interface SectionSkeletonProps {
  cards?: number;
  cardHeight?: string;
  columns?: string;
}

/** Başlık + kart grid'i şeklindeki sayfa bölümlerinin genel yerini tutar. */
export function SectionSkeleton({
  cards = 4,
  cardHeight = 'h-48',
  columns = 'sm:grid-cols-2 lg:grid-cols-4',
}: SectionSkeletonProps) {
  return (
    <section className="py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <Skeleton className="mx-auto h-8 w-64" />
        <div className={`grid grid-cols-1 gap-5 ${columns}`}>
          {Array.from({ length: cards }).map((_, index) => (
            <Skeleton key={index} className={`w-full rounded-2xl ${cardHeight}`} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Paragraf içeriğinin (intro, blog gövdesi vb.) yerini tutan metin satırları. */
export function TextBlockSkeleton({ lines = 4 }: { lines?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton key={index} className={index === lines - 1 ? 'h-4 w-2/3' : 'h-4 w-full'} />
      ))}
    </div>
  );
}
