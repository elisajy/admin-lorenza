import React from "react";

export interface RouteInfo {
  id: string;
  name: string;
  path: string;
  component?: any;
  children?: RouteInfo[];
}

const ReactLazyPreload = (importStatement: any) => {
  const Component: any = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const ProductListing = ReactLazyPreload(
  () => import("./pages/products/ProductListing")
);
ProductListing.preload();

const EditProduct = ReactLazyPreload(
  () => import("./pages/products/EditProduct/EditProduct")
);
EditProduct.preload();

const AddProduct = ReactLazyPreload(
  () => import("./pages/products/AddProduct/AddProduct")
);
AddProduct.preload();

const ProductCategories = ReactLazyPreload(
  () => import("./pages/products/ProductCategories")
);
ProductCategories.preload();

const EditCategory = ReactLazyPreload(
  () => import("./pages/products/EditCategory/EditCategory")
);
EditCategory.preload();

const AddCategory = ReactLazyPreload(
  () => import("./pages/products/AddCategory/AddCategory")
);
AddCategory.preload();

const MenuSettings = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/MenuSettings")
);
MenuSettings.preload();

const MenuListingSettings = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/MenuListingSettings")
);
MenuListingSettings.preload();

const EditMenu = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/EditMenu/EditMenu")
);
EditMenu.preload();

const FAQSettings = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/FAQSettings")
);
FAQSettings.preload();

const FAQSectionSettings = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/FAQSectionSettings")
);
FAQSectionSettings.preload();

const EditFAQSection = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/EditFAQSection")
);
EditFAQSection.preload();

const AddFAQSection = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/AddFAQSection")
);
AddFAQSection.preload();

const EditFAQ = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/EditFAQ")
);
EditFAQ.preload();

const AddFAQ = ReactLazyPreload(
  () => import("./pages/settings/FAQSettings/AddFAQ")
);
AddFAQ.preload();

const AboutUsSettings = ReactLazyPreload(
  () => import("./pages/settings/AboutUsSettings/AboutUsSettings")
);
AboutUsSettings.preload();

const HomeBanner = ReactLazyPreload(
  () => import("./pages/home/Banners/Banners")
);
HomeBanner.preload();

const AddBanner = ReactLazyPreload(
  () => import("./pages/home/Banners/AddBanner")
);
AddBanner.preload();

const EditBanner = ReactLazyPreload(
  () => import("./pages/home/Banners/EditBanner")
);
EditBanner.preload();

const HomePartners = ReactLazyPreload(
  () => import("./pages/home/Partners/Partners")
);
HomePartners.preload();

const AddPartner = ReactLazyPreload(
  () => import("./pages/home/Partners/AddPartner")
);
AddPartner.preload();

const EditPartner = ReactLazyPreload(
  () => import("./pages/home/Partners/EditPartner")
);
EditPartner.preload();

export const protectedRoutes: RouteInfo[] = [
  {
    id: "Products",
    name: "Products",
    path: "/product-listing",
    component: ProductListing,
  },
  {
    id: "Edit Products",
    name: "Edit Product",
    path: "/product-listing/edit/:id",
    component: EditProduct,
  },
  {
    id: "Add Products",
    name: "Add Product",
    path: "/product-listing/add",
    component: AddProduct,
  },
  {
    id: "Categories",
    name: "Categories",
    path: "/product-categories",
    component: ProductCategories,
  },
  {
    id: "Edit Categories",
    name: "Edit Categories",
    path: "/product-categories/edit/:id",
    component: EditCategory,
  },
  {
    id: "Add Categories",
    name: "Add Categories",
    path: "/product-categories/add",
    component: AddCategory,
  },
  {
    id: "Menu Settings",
    name: "Menu Settings",
    path: "/menu-settings",
    component: MenuSettings,
  },
  {
    id: "Menu Listing Settings",
    name: "Menu Listing Settings",
    path: "/menu-listing-settings",
    component: MenuListingSettings,
  },
  {
    id: "Edit Menu",
    name: "Edit Menu",
    path: "/menu-settings/edit/:id",
    component: EditMenu,
  },
  {
    id: "FAQ Settings",
    name: "FAQ Settings",
    path: "/faq-settings",
    component: FAQSettings,
  },
  {
    id: "FAQ Section Settings",
    name: "FAQ Section Settings",
    path: "/faq-section-settings",
    component: FAQSectionSettings,
  },
  {
    id: "Edit FAQ",
    name: "Edit FAQ",
    path: "/faq-settings/edit/:id",
    component: EditFAQ,
  },
  {
    id: "Add FAQ",
    name: "Add FAQ",
    path: "/faq-settings/add",
    component: AddFAQ,
  },
  {
    id: "Edit FAQ Section",
    name: "Edit FAQ Section",
    path: "/faq-section-settings/edit/:id",
    component: EditFAQSection,
  },
  {
    id: "Add FAQ Section",
    name: "Add FAQ Section",
    path: "/faq-section-settings/add",
    component: AddFAQSection,
  },
  {
    id: "About Us Settings",
    name: "About Us Settings",
    path: "/about-us-settings",
    component: AboutUsSettings,
  },
  {
    id: "Home Banner",
    name: "Banner",
    path: "/banners",
    component: HomeBanner,
  },
  {
    id: "Add Banner",
    name: "Add Banner",
    path: "/banners/add",
    component: AddBanner,
  },
  {
    id: "Edit Banner",
    name: "Edit Banner",
    path: "/banners/edit/:id",
    component: EditBanner,
  },
  {
    id: "Home Partner",
    name: "Partners",
    path: "/partners",
    component: HomePartners,
  },
  {
    id: "Add Partner",
    name: "Add Partner",
    path: "/partners/add",
    component: AddPartner,
  },
  {
    id: "Edit Partner",
    name: "Edit Partner",
    path: "/partners/edit/:id",
    component: EditPartner,
  },
];
