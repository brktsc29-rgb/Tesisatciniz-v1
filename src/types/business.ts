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
}
