export interface PricingTier {
    id: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    discountPercent?: number;
    savings?: string;
    isBestSeller?: boolean;
    illustration: string;
  
    vouchers: {
      count: number;
      title: string;
      type: "premium" | "standard" | "push";
    }[];
  
    features: {
      name: string;
      enabled: boolean;
    }[];
  }