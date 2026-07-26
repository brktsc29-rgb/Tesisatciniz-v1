export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface BusinessCapabilities {
  /** Set to true only once leak-detection equipment details are confirmed. */
  hasLeakDetectionDevice: boolean;
}

export interface BusinessCoordinates {
  lat: number;
  lng: number;
}

export interface BusinessConfig {
  businessName: string;
  domain: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  serviceAreas: ServiceArea[];
  workingMessage: string;
  socialLinks: SocialLink[];
  capabilities: BusinessCapabilities;

  /**
   * Aşağıdaki alanlar Faz 2.2 kapsamında eklendi; doğrulanana kadar boş
   * bırakılmalıdır. Hiçbir bileşen bu alanları zorunlu kullanmaz — dolu
   * geldiklerinde ilgili yerler (örn. Logo, LocalBusiness schema) otomatik
   * devreye girecek şekilde tasarlanmıştır.
   */
  logo: string;
  workingHours: string[];
  googleBusinessUrl: string;
  reviewUrl: string;
  coordinates: BusinessCoordinates | null;
  address: string;
  city: string;
  /** serviceAreas'tan türetilir; ayrı bir kaynak değildir. */
  districts: string[];
}
