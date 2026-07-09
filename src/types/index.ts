export interface Product {
  id: string;
  name: string;
  collection: string;
  category: string;
  color: string;
  surface: string;
  dimensions: string;
  thickness: string;
  description: string;
  images: string[];
  features?: string[];
  applications?: string[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  images: string[];
  products?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  mapEmbedUrl?: string;
}
