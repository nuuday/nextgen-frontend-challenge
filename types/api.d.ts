export interface Color {
  color: string;
  colorHex: string;
}

export interface Specification {
  label: string;
  description: string;
}

export interface Gallery {
  image: string;
  imageAlt: string;
}

export interface Subscription {
  devicePrice: number;
  contractPeriod: number;
  priceWithoutSubsidy: number;
  serviceDiscount: number;
  label: string;
  type: string;
  monthlyPrice: number;
  signupCost: number;
  minPriceFirstMonth: number;
  data: string;
  roaming: string;
}

export interface Variant {
  id: number;
  size: string;
  color: string;
  colorHex: string;
  image: string;
  imageAlt: string;
  gallery: Gallery[];
  inStock: boolean;
  subscriptions: Subscription[];
}

export interface Device {
  id: number;
  name: string;
  slug: string;
  brandName: string;
  brandSlug: string;
  headline: string;
  documentTitle: string;
  campaignLabel: string;
  colors: Color[];
  descriptionMeta: string;
  descriptionHtml: string;
  specifications: Specification[];
  deviceType: string;
  labels: string[];
  offeringService: string;
  offeringServicePrice: number;
  leastPriceRepayments: number;
  leastPriceUpfront: number;
  leastPrice: number;
  savings: number;
  serviceDiscount: number;
  signupCost: number;
  featuredVariantId: number;
  onSale: boolean;
  variants: Variant[];
}

export interface DeviceList {
  id: number;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  brandName: string;
  brandSlug: string;
  campaignLabel: string;
  colors: Color[];
  labels: string[];
  offeringService: string;
  offeringServicePrice: number;
  leastPriceRepayments: number;
  leastPriceUpfront: number;
  leastPrice: number;
  savings: number;
  serviceDiscount: number;
  signupCost: number;
  deviceType: string;
}
