/**
 * WhatsApp derin bağlantısı oluşturur. Numara boşsa null döner;
 * bu durumda çağıran bileşen bağlantı yerine bildirim göstermelidir.
 */
export function buildWhatsAppUrl(whatsappNumber: string, message: string): string | null {
  const digits = whatsappNumber.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
