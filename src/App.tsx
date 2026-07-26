import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ContactNoticeProvider } from './hooks/useContactNotice';
import { services } from './data/services';
import { districts } from './data/districts';
import { ROUTES } from './config/routes';
import { ServicePageSkeleton } from './components/skeletons/ServicePageSkeleton';
import { DistrictPageSkeleton } from './components/skeletons/DistrictPageSkeleton';
import { BlogListPageSkeleton } from './components/skeletons/BlogListPageSkeleton';
import { BlogPostPageSkeleton } from './components/skeletons/BlogPostPageSkeleton';

const ServicePage = lazy(() => import('./pages/ServicePage').then((m) => ({ default: m.ServicePage })));
const DistrictPage = lazy(() =>
  import('./pages/DistrictPage').then((m) => ({ default: m.DistrictPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);
const BlogListPage = lazy(() =>
  import('./pages/BlogListPage').then((m) => ({ default: m.BlogListPage })),
);
const BlogPostPage = lazy(() =>
  import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })),
);

function App() {
  return (
    <HelmetProvider>
      <ContactNoticeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />

              {services.map((service) => (
                <Route
                  key={service.slug}
                  path={service.path}
                  element={
                    <Suspense fallback={<ServicePageSkeleton />}>
                      <ServicePage service={service} />
                    </Suspense>
                  }
                />
              ))}

              {districts.map((district) => (
                <Route
                  key={district.slug}
                  path={district.path}
                  element={
                    <Suspense fallback={<DistrictPageSkeleton />}>
                      <DistrictPage district={district} />
                    </Suspense>
                  }
                />
              ))}

              <Route
                path={ROUTES.blog}
                element={
                  <Suspense fallback={<BlogListPageSkeleton />}>
                    <BlogListPage />
                  </Suspense>
                }
              />
              <Route
                path={ROUTES.blogPost(':slug')}
                element={
                  <Suspense fallback={<BlogPostPageSkeleton />}>
                    <BlogPostPage />
                  </Suspense>
                }
              />

              <Route
                path={ROUTES.wildcard}
                element={
                  <Suspense fallback={null}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactNoticeProvider>
    </HelmetProvider>
  );
}

export default App;
