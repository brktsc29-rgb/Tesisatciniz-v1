import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ContactNoticeProvider } from './hooks/useContactNotice';

function App() {
  return (
    <HelmetProvider>
      <ContactNoticeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactNoticeProvider>
    </HelmetProvider>
  );
}

export default App;
