import { Container } from '../ui/Container';
import { Skeleton, SkeletonPage } from '../ui/Skeleton';
import { BreadcrumbSkeleton, PageHeroSkeleton, SectionSkeleton, TextBlockSkeleton } from './shared';

/** DistrictPage lazy chunk'ı yüklenirken gösterilen skeleton. */
export function DistrictPageSkeleton() {
  return (
    <SkeletonPage label="Hizmet bölgesi sayfası yükleniyor">
      <BreadcrumbSkeleton />
      <PageHeroSkeleton />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <TextBlockSkeleton lines={2} />
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-6">
          <Skeleton className="h-8 w-56" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </Container>
      </section>
      <SectionSkeleton cards={4} cardHeight="h-28" />
    </SkeletonPage>
  );
}
