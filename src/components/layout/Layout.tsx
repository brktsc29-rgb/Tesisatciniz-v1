import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyContactBar } from './MobileStickyContactBar';
import { ContactNoticeToast } from '../ui/ContactNoticeToast';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        İçeriğe geç
      </a>
      <div id="top" />
      <TopBar />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div aria-hidden="true" className="h-16 md:hidden" />
      <MobileStickyContactBar />
      <ContactNoticeToast />
    </div>
  );
}
