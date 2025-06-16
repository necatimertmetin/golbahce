import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import type { JSX } from "react";
import { db } from "../firebase/firebase";

// Firebase'den gelecek veri tipleri
export interface FirebaseCategory {
  key: string;
  name: string;
  image: string;
  order: number;
}

export interface FirebaseMenuItem {
  key: string;
  name: string;
  category: string;
  price: number;
  allergens: AllergenKey[];
  hasExtras?: boolean;
  order: number;
}

export interface FirebaseExtra {
  key: string;
  name: string;
  parentItem: string;
  price: number;
  allergens: AllergenKey[];
  order: number;
}

export interface FirebaseAllergen {
  key: AllergenKey;
  name: string;
  color: string;
  icon: string;
}

// Mevcut interface'ler (değişiklik yok)
export type AllergenKey =
  | "egg"
  | "milk"
  | "fish"
  | "crustacean"
  | "peanut"
  | "tree_nut"
  | "soy"
  | "gluten"
  | "sesame"
  | "lactose";

export interface Allergen {
  title: string;
  color: string;
  icon: JSX.Element;
}

export interface MenuItem {
  key: string;
  price: number;
  allergens: AllergenKey[];
  extras?: MenuItem[];
}

export interface MenuCategory {
  key: string;
  image: string;
  items: MenuItem[];
}

// Firebase verilerini uygulamada kullanılacak formata dönüştüren fonksiyonlar
export function convertFirebaseDataToMenuData(
  categories: Record<string, FirebaseCategory>,
  menuItems: Record<string, FirebaseMenuItem>,
  extras: Record<string, FirebaseExtra>
): MenuCategory[] {
  // Kategorileri sıraya koy
  const sortedCategories = Object.values(categories).sort(
    (a, b) => a.order - b.order
  );

  return sortedCategories.map((category) => {
    // Bu kategoriye ait menü öğelerini bul
    const categoryItems = Object.values(menuItems)
      .filter((item) => item.category === category.key)
      .sort((a, b) => a.order - b.order);

    // Her menü öğesi için extras'ları bul
    const itemsWithExtras: MenuItem[] = categoryItems.map((item) => {
      const itemExtras = Object.values(extras)
        .filter((extra) => extra.parentItem === item.key)
        .sort((a, b) => a.order - b.order)
        .map((extra) => ({
          key: extra.key,
          price: extra.price,
          allergens: extra.allergens,
        }));

      return {
        key: item.key,
        price: item.price,
        allergens: item.allergens,
        extras: itemExtras.length > 0 ? itemExtras : undefined,
      };
    });

    return {
      key: category.key,
      image: category.image,
      items: itemsWithExtras,
    };
  });
}

// Firebase'den veri çekme fonksiyonu (mock data ile)
export async function fetchMenuDataFromFirebase(): Promise<{
  menuData: MenuCategory[];
  allergenData: Record<AllergenKey, Allergen>;
}> {
  // Bu fonksiyonu Firebase SDK ile implement edeceksiniz
  // Şimdilik mock data return edelim

  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const menuItemsSnapshot = await getDocs(collection(db, "menu_items"));
    const extrasSnapshot = await getDocs(collection(db, "extras"));
    const allergensSnapshot = await getDocs(collection(db, "allergens"));

    const categories: Record<string, FirebaseCategory> = {};
    categoriesSnapshot.forEach((doc) => {
      categories[doc.id] = doc.data() as FirebaseCategory;
    });

    const menuItems: Record<string, FirebaseMenuItem> = {};
    menuItemsSnapshot.forEach((doc) => {
      menuItems[doc.id] = doc.data() as FirebaseMenuItem;
    });

    const extras: Record<string, FirebaseExtra> = {};
    extrasSnapshot.forEach((doc) => {
      extras[doc.id] = doc.data() as FirebaseExtra;
    });

    const allergens: Record<string, FirebaseAllergen> = {};
    allergensSnapshot.forEach((doc) => {
      allergens[doc.id] = doc.data() as FirebaseAllergen;
    });

    const menuData = convertFirebaseDataToMenuData(
      categories,
      menuItems,
      extras
    );
    const allergenData = convertFirebaseAllergensToAllergens(allergens);

    return { menuData, allergenData };
  } catch (error) {
    console.error("Firebase veri çekme hatası:", error);
    throw error;
  }
}

export function convertFirebaseAllergensToAllergens(
  firebaseAllergens: Record<string, FirebaseAllergen>
): Record<AllergenKey, Allergen> {
  const result: Record<AllergenKey, Allergen> = {} as Record<
    AllergenKey,
    Allergen
  >;

  Object.values(firebaseAllergens).forEach((allergen) => {
    result[allergen.key] = {
      title: allergen.name,
      color: allergen.color,
      icon: <span>{allergen.icon}</span>,
    };
  });

  return result;
}

// Custom hook - mevcut kodunuzda direkt kullanabilirsiniz
// Custom hook - fixed version
export function useMenuData() {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [allergens, setAllergens] = useState<Record<AllergenKey, Allergen>>(
    {} as Record<AllergenKey, Allergen>
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenuDataFromFirebase()
      .then(({ menuData, allergenData }) => {
        setMenuData(menuData);
        setAllergens(allergenData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { menuData, allergens, loading, error };
}

// Fallback - eğer Firebase'den veri gelmediyse eski static veriyi kullan
export const fallbackMenuData: MenuCategory[] = [
  {
    key: "breakfast",
    image: "/images/menu/breakfast/breakfast.jpg",
    items: [
      {
        key: "serpme_single",
        price: 500,
        allergens: ["egg", "milk", "gluten"],
        extras: [
          { key: "egg_with_pastirma", price: 2.5, allergens: ["egg", "milk"] },
          { key: "egg_with_sucuk", price: 2.4, allergens: ["egg"] },
          // ... diğer extras
        ],
      },
    ],
  },
  // ... diğer kategoriler
];

// Export - mevcut kodunuz için
export const menuData = fallbackMenuData; // Geçici - hook kullanımına geçene kadar
