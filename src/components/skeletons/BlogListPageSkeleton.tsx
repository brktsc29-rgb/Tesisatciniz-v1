import { Container } from '../ui/Container';
import { Skeleton, SkeletonPage } from '../ui/Skeleton';
import { BreadcrumbSkeleton } from './shared';

/** BlogListPage lazy chunk'ı yüklenirken gösterilen skeleton. */
export function BlogListPageSkeleton() {
  return (
    <SkeletonPage label="Blog sayfası yükleniyor">
      <BreadcrumbSkeleton />
      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <Skeleton className="h-9 w-32" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex h-full flex-col gap-3 rounded-2xl border border-border-light bg-white p-6"
              >
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SkeletonPage>
  );
}
