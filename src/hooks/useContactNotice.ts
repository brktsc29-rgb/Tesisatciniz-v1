import { createContext, useContext } from 'react';

export interface ContactNoticeContextValue {
  message: string | null;
  showNotice: (message: string) => void;
}

export const ContactNoticeContext = createContext<ContactNoticeContextValue | null>(null);

export function useContactNotice(): ContactNoticeContextValue {
  const ctx = useContext(ContactNoticeContext);
  if (!ctx) {
    throw new Error('useContactNotice, ContactNoticeProvider içinde kullanılmalıdır.');
  }
  return ctx;
}
