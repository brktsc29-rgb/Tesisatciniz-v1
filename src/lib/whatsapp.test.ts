import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl } from './whatsapp';

describe('buildWhatsAppUrl', () => {
  it('boş numara için bağlantı üretmez', () => {
    expect(buildWhatsAppUrl('', 'Merhaba')).toBeNull();
  });

  it('numarayı temizler ve mesajı URL için kodlar', () => {
    expect(buildWhatsAppUrl('+90 (535) 982 76 86', 'Merhaba, bilgi alabilir miyim?')).toBe(
      'https://wa.me/905359827686?text=Merhaba%2C%20bilgi%20alabilir%20miyim%3F',
    );
  });
});
