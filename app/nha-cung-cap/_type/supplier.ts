export interface Supplier {
    id: number;
    name: string;
    category: string;
    address: string;
    phone: string;
    hotline: string;
    website: string;
    logo: string;
    verified?: boolean;
    sponsor?: boolean;
    description: string[];
    standards: string[];
    commitment: string;
    gallery: string[];
  }