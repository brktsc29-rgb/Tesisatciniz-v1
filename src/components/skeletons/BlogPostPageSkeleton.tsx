import { Container } from '../ui/Container';
import { Skeleton, SkeletonPage } from '../ui/Skeleton';
import { BreadcrumbSkeleton, TextBlockSkeleton } from './shared';

/** BlogPostPage lazy chunk'ı yüklenirken gösterilen skeleton. */
export function BlogPostPageSkeleton() {
  return (
    <SkeletonPage label="Blog yazısı yükleniyor">
      <BreadcrumbSkeleton />
      <section className="py-16 md:py-20">
        <Container className="max-w-2xl">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-3 h-9 w-full" />
          <Skeleton className="mt-2 h-9 w-2/3" />
          <div className="mt-6">
            <TextBlockSkeleton lines={6} />
          </div>
        </Container>
      </section>
    </SkeletonPage>
  );
}
