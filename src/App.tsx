import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ContactNoticeProvider } from './hooks/useContactNotice';
import { services } from './data/services';
import { districts } from './data/districts';

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
                    <Suspense fallback={null}>
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
                    <Suspense fallback={null}>
                      <DistrictPage district={district} />
                    </Suspense>
                  }
                />
              ))}

              <Route
                path="/blog"
                element={
                  <Suspense fallback={null}>
                    <BlogListPage />
                  </Suspense>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <Suspense fallback={null}>
                    <BlogPostPage />
                  </Suspense>
                }
              />

              <Route
                path="*"
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
