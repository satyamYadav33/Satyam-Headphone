
export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Over-Ear' | 'TWS' | 'Neckband' | 'Accessories';
  price: string;
  description: string;
  specs: {
    driver: string;
    battery: string;
    anc: boolean;
    waterproof: string;
  };
  color: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
