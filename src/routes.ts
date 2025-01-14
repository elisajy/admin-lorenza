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

const EditMenuListing = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/EditMenuListing")
);
EditMenuListing.preload();

const EditMenu = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/EditMenu/EditMenu")
);
EditMenu.preload();

const AddMenu = ReactLazyPreload(
  () => import("./pages/settings/MenuSettings/AddMenu/AddMenu")
);
AddMenu.preload();

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

const Inspirations = ReactLazyPreload(
  () => import("./pages/inspirations/Inspirations")
);
Inspirations.preload();

const AddInspiration = ReactLazyPreload(
  () => import("./pages/inspirations/AddInspiration")
);
AddInspiration.preload();

const EditInspiration = ReactLazyPreload(
  () => import("./pages/inspirations/EditInspiration")
);
EditInspiration.preload();

const Projects = ReactLazyPreload(() => import("./pages/projects/Projects"));
Projects.preload();

const AddProject = ReactLazyPreload(
  () => import("./pages/projects/AddProject")
);
AddProject.preload();

const EditProject = ReactLazyPreload(
  () => import("./pages/projects/EditProject")
);
EditProject.preload();

const CompanyInfo = ReactLazyPreload(
  () => import("./pages/home/CompanyInfo/CompanyInfo")
);
CompanyInfo.preload();

const EditCompanyInfo = ReactLazyPreload(
  () => import("./pages/home/CompanyInfo/EditCompanyInfo")
);
EditCompanyInfo.preload();

const ProductTags = ReactLazyPreload(
  () => import("./pages/products/ProductTags")
);
ProductTags.preload();

const AddTag = ReactLazyPreload(() => import("./pages/products/AddTag/AddTag"));
AddTag.preload();

const EditTag = ReactLazyPreload(
  () => import("./pages/products/EditTag/EditTag")
);
EditTag.preload();

const ProductSizes = ReactLazyPreload(
  () => import("./pages/products/ProductSizes")
);
ProductSizes.preload();

const AddSize = ReactLazyPreload(
  () => import("./pages/products/AddSize/AddSize")
);
AddSize.preload();

const EditSize = ReactLazyPreload(
  () => import("./pages/products/EditSize/EditSize")
);
EditSize.preload();

const ProductFinishes = ReactLazyPreload(
  () => import("./pages/products/ProductFinishes")
);
ProductFinishes.preload();

const AddFinish = ReactLazyPreload(
  () => import("./pages/products/AddFinish/AddFinish")
);
AddFinish.preload();

const EditFinish = ReactLazyPreload(
  () => import("./pages/products/EditFinish/EditFinish")
);
EditFinish.preload();

const ProductColors = ReactLazyPreload(
  () => import("./pages/products/ProductColors")
);
ProductColors.preload();

const AddColor = ReactLazyPreload(
  () => import("./pages/products/AddColor/AddColor")
);
AddColor.preload();

const EditColor = ReactLazyPreload(
  () => import("./pages/products/EditColor/EditColor")
);
EditColor.preload();

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
    path: "/menu-listing-settings/edit/:id",
    component: EditMenuListing,
  },
  {
    id: "Edit Menu",
    name: "Edit Menu",
    path: "/menu-settings/edit/:id",
    component: EditMenu,
  },
  {
    id: "Add Menu",
    name: "Add Menu",
    path: "/menu-settings/add",
    component: AddMenu,
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
  {
    id: "Inspiration",
    name: "Inspiration",
    path: "/inspiration-settings",
    component: Inspirations,
  },
  {
    id: "Add Inspiration",
    name: "Add Inspiration",
    path: "/inspiration-settings/add",
    component: AddInspiration,
  },
  {
    id: "Edit Inspiration",
    name: "Edit Inspiration",
    path: "/inspiration-settings/edit/:id",
    component: EditInspiration,
  },
  {
    id: "Projects",
    name: "Projects",
    path: "/project-settings",
    component: Projects,
  },
  {
    id: "Add Project",
    name: "Add Project",
    path: "/project-settings/add",
    component: AddProject,
  },
  {
    id: "Edit Project",
    name: "Edit Project",
    path: "/project-residentials/edit/:id",
    component: EditProject,
  },
  {
    id: "Edit Project",
    name: "Edit Project",
    path: "/project-commercials/edit/:id",
    component: EditProject,
  },
  {
    id: "Company Info",
    name: "Company Info",
    path: "/company-info",
    component: CompanyInfo,
  },
  {
    id: "Edit Company Info",
    name: "Edit Company Info",
    path: "/company-info/edit/:key",
    component: EditCompanyInfo,
  },
  {
    id: "Product Tags",
    name: "Product Tags",
    path: "/product-tags",
    component: ProductTags,
  },
  {
    id: "Add Tag",
    name: "Add Tag",
    path: "/product-tags/add",
    component: AddTag,
  },
  {
    id: "Edit Tag",
    name: "Edit Tag",
    path: "/product-tags/edit/:id",
    component: EditTag,
  },
  {
    id: "Product Sizes",
    name: "Product Sizes",
    path: "/product-sizes",
    component: ProductSizes,
  },
  {
    id: "Add Size",
    name: "Edit Size",
    path: "product-sizes/add",
    component: AddSize,
  },
  {
    id: "Edit Size",
    name: "Edit Size",
    path: "/product-sizes/edit/:id",
    component: EditSize,
  },
  {
    id: "Product Finishes",
    name: "Product Finishes",
    path: "/product-finishes",
    component: ProductFinishes,
  },
  {
    id: "Add Finish",
    name: "Edit Finish",
    path: "product-finishes/add",
    component: AddFinish,
  },
  {
    id: "Edit Finish",
    name: "Edit Finish",
    path: "/product-finishes/edit/:id",
    component: EditFinish,
  },
  {
    id: "Product Colors",
    name: "Product Colors",
    path: "/product-colors",
    component: ProductColors,
  },
  {
    id: "Add Color",
    name: "Edit Color",
    path: "product-colors/add",
    component: AddColor,
  },
  {
    id: "Edit Color",
    name: "Edit Color",
    path: "/product-colors/edit/:id",
    component: EditColor,
  },
];
