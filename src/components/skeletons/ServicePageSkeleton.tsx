import { Container } from '../ui/Container';
import { SkeletonPage } from '../ui/Skeleton';
import { BreadcrumbSkeleton, PageHeroSkeleton, SectionSkeleton, TextBlockSkeleton } from './shared';

/** ServicePage lazy chunk'ı yüklenirken gösterilen skeleton. */
export function ServicePageSkeleton() {
  return (
    <SkeletonPage label="Hizmet sayfası yükleniyor">
      <BreadcrumbSkeleton />
      <PageHeroSkeleton />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <TextBlockSkeleton lines={3} />
        </Container>
      </section>
      <SectionSkeleton cards={4} cardHeight="h-20" columns="sm:grid-cols-2" />
      <SectionSkeleton cards={4} cardHeight="h-28" />
    </SkeletonPage>
  );
}
