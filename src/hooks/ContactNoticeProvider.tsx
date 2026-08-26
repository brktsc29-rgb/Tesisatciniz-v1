import { useCallback, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { theme } from '../config/theme';
import { ContactNoticeContext } from './useContactNotice';

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
