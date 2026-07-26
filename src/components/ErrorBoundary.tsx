import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { ROUTES } from '../config/routes';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Uygulama genelinde beklenmeyen render hatalarını yakalar. React Router'ın
 * kendisi de bu sınırın içinde olduğundan (bkz. main.tsx), fallback ekranı
 * <Link> yerine düz <a> kullanır — Router çökmüşse bile çalışır.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Beklenmeyen uygulama hatası:', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface px-5 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange">
          <AlertTriangle aria-hidden="true" className="h-8 w-8" />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] leading-tight font-extrabold text-navy md:text-[36px]">
            Beklenmeyen bir hata oluştu
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink/75">
            Sayfa yüklenirken bir sorun oluştu. Ana sayfaya dönerek tekrar deneyebilirsiniz.
          </p>
        </div>
        <a
          href={ROUTES.home}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-navy px-6 font-semibold text-white transition-colors hover:bg-navy/90"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    );
  }
}
