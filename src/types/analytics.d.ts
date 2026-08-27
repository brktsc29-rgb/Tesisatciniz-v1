type GtagCommand = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer: GtagCommand[];
    gtag: (...args: GtagCommand) => void;
  }
}

export {};
