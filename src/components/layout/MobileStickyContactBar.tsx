import { ContactButton } from '../ui/ContactButton';

export function MobileStickyContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex overflow-hidden rounded-t-2xl bg-white shadow-[0_-6px_20px_rgba(16,42,67,0.14)]">
        <ContactButton kind="call" label="Müsaitlik İçin Ara" shape="barSegment" />
        <ContactButton kind="whatsapp" label="WhatsApp" shape="barSegment" />
      </div>
    </div>
  );
}
