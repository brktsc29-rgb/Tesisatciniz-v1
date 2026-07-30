import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactNoticeProvider } from './hooks/useContactNotice';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <ContactNoticeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ContactNoticeProvider>
    </HelmetProvider>
  );
}

export default App;
