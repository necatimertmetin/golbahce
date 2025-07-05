import { Home } from "@mui/icons-material";
import type { JSX } from "react";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { Gallery } from "../pages/gallery/Gallery";
import { CategoryPage } from "../pages/menu/category/Category";
import MenuPage from "../pages/menu/Menu";
import { PrivacyPolicy } from "../pages/privacy/PrivacyPolicy";
import { Products } from "../pages/products/Products";

export type AppRoute = {
  path: string;
  element: JSX.Element;
  labelKey?: string;
  showInMenu?: boolean;
  showInFooter?: boolean;
};

export const ROUTES: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
    labelKey: "home",
    showInMenu: true,
    showInFooter: true,
  },
  {
    path: "/about",
    element: <About />,
    labelKey: "about",
    showInMenu: true,
    showInFooter: true,
  },
  {
    path: "/contact",
    element: <Contact />,
    labelKey: "contact",
    showInMenu: true,
    showInFooter: true,
  },
  {
    path: "/menu",
    element: <MenuPage />,
    labelKey: "menu",
    showInMenu: true,
    showInFooter: true,
  },
  { path: "/menu/:categoryKey", element: <CategoryPage /> }, // Alt sayfa, menüde listelenmez
  {
    path: "/products",
    element: <Products />,
    labelKey: "product",
    showInMenu: true,
  },
  { path: "/privacy", element: <PrivacyPolicy /> }, // Menüde gösterme
  {
    path: "/gallery",
    element: <Gallery />,
    labelKey: "gallery",
    showInMenu: true,
  },
];
