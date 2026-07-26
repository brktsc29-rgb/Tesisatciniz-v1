import { useContactNotice } from '../../hooks/useContactNotice';

export function ContactNoticeToast() {
  const { message } = useContactNotice();

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-[80px] z-50 flex justify-center px-5 md:bottom-6"
    >
      {message ? (
        <div className="pointer-events-auto rounded-xl bg-navy px-4 py-3 text-sm font-medium text-white shadow-lg">
          {message}
        </div>
      ) : null}
    </div>
  );
}
