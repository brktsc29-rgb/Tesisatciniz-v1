import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { theme } from '../config/theme';

interface ContactNoticeContextValue {
  message: string | null;
  showNotice: (message: string) => void;
}

const ContactNoticeContext = createContext<ContactNoticeContextValue | null>(null);

const NOTICE_DURATION_MS = theme.duration.toast;

export function ContactNoticeProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNotice = useCallback((next: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(next);
    timeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, NOTICE_DURATION_MS);
  }, []);

  const value = useMemo(() => ({ message, showNotice }), [message, showNotice]);

  return <ContactNoticeContext.Provider value={value}>{children}</ContactNoticeContext.Provider>;
}

export function useContactNotice(): ContactNoticeContextValue {
  const ctx = useContext(ContactNoticeContext);
  if (!ctx) {
    throw new Error('useContactNotice, ContactNoticeProvider içinde kullanılmalıdır.');
  }
  return ctx;
}
