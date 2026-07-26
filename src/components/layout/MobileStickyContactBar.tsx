import { ContactButton } from '../ui/ContactButton';

export function MobileStickyContactBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex bg-white shadow-[0_-4px_16px_rgba(16,42,67,0.12)]">
        <ContactButton
          kind="call"
          label="Müsaitlik İçin Ara"
          sublabel="Müsaitlik için arayın"
          shape="barSegment"
        />
        <ContactButton kind="whatsapp" label="WhatsApp" sublabel="Fotoğraf gönderin" shape="barSegment" />
      </div>
    </div>
  );
}
