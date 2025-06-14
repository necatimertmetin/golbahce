import type { JSX } from "react";
import type { IconType } from "react-icons";

export interface Allergen {
  title: string;
  color: string;
  icon: IconType; // react-icons tipi
}

export interface MenuItem {
  title: string;
  description: string;
  image: string;
  price: number;
  allergents: Allergen[];
  extras?: MenuItem[]; // Recursive yapı
}

export interface MenuCategory {
  category: string;
  icon: JSX.Element;
  items: MenuItem[];
  extras?: MenuItem[]; // İstenirse kategori bazında extra eklenebilir
}
