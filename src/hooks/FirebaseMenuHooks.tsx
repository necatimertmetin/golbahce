import { useState, useEffect } from "react";
import type { JSX } from "react";

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
    // Gerçek implementasyonda burada Firestore'dan veri çekeceksiniz:
    /*
    const categoriesSnapshot = await db.collection('categories').get();
    const menuItemsSnapshot = await db.collection('menu_items').get();
    const extrasSnapshot = await db.collection('extras').get();
    const allergensSnapshot = await db.collection('allergens').get();
    */

    // Mock data (Firebase yapısına uygun)
    const categories: Record<string, FirebaseCategory> = {
      breakfast: {
        key: "breakfast",
        name: "Kahvaltı",
        image: "/images/menu/breakfast/breakfast.jpg",
        order: 1,
      },
      toast: {
        key: "toast",
        name: "Tost",
        image: "/images/menu/toast/toast.jpg",
        order: 2,
      },
      gozleme: {
        key: "gozleme",
        name: "Gözleme",
        image: "/images/menu/gozleme/gozleme.webp",
        order: 3,
      },
      burger: {
        key: "burger",
        name: "Burger",
        image: "/images/menu/burger/hamburger.jpg",
        order: 4,
      },
      pasta: {
        key: "pasta",
        name: "Makarna",
        image: "/images/menu/pasta/pasta.jpg",
        order: 5,
      },
      grill: {
        key: "grill",
        name: "Izgara",
        image: "/images/menu/grill/grill.jpg",
        order: 6,
      },
      cold_drinks: {
        key: "cold_drinks",
        name: "Soğuk İçecekler",
        image: "/images/menu/cold/cold.jpg",
        order: 7,
      },
      hot_drinks: {
        key: "hot_drinks",
        name: "Sıcak İçecekler",
        image: "/images/menu/hot/hot.jpg",
        order: 8,
      },
    };

    const menuItems: Record<string, FirebaseMenuItem> = {
      serpme_single: {
        key: "serpme_single",
        name: "Serpme Kahvaltı",
        category: "breakfast",
        price: 500,
        allergens: ["egg", "milk", "gluten"],
        hasExtras: true,
        order: 1,
      },
      karisik: {
        key: "karisik",
        name: "Karışık Tost",
        category: "toast",
        price: 150,
        allergens: ["milk", "gluten"],
        order: 1,
      },
      kasarli: {
        key: "kasarli",
        name: "Kaşarlı Tost",
        category: "toast",
        price: 150,
        allergens: ["milk", "gluten"],
        order: 2,
      },
      // ... diğer öğeler
    };

    const extras: Record<string, FirebaseExtra> = {
      egg_with_pastirma: {
        key: "egg_with_pastirma",
        name: "Pastırmalı Yumurta",
        parentItem: "serpme_single",
        price: 2.5,
        allergens: ["egg", "milk"],
        order: 1,
      },
      // ... diğer extras
    };

    const allergens: Record<string, FirebaseAllergen> = {
      egg: { key: "egg", name: "Yumurta", color: "#FFE135", icon: "🥚" },
      milk: { key: "milk", name: "Süt", color: "#FFFFFF", icon: "🥛" },
      // ... diğer allergenler
    };

    // Dönüştür
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
