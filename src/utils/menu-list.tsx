import {
  Monitor,
  ScrollText,
  ShoppingCart,
  Shapes,
  Package2,
  TicketPercent,
  FlameKindling,
  Images,
  Star,
} from "lucide-react";
import { TGroup } from "../types/menu";


export function getMenuList(pathname: string): TGroup[] {
  return [
    {
      groupLabel: "Main",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: Monitor,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Management",
      menus: [
        {
          href: "/order-list",
          label: "Orders",
          active: pathname.includes("/order-list"),
          icon: ShoppingCart,
          submenus: [],
        },

        {
          href: "/category",
          label: "Category",
          active: pathname.includes("/category"),
          icon: Shapes,
          submenus: [
            {
              href: "/category/category",
              label: "Category",
              active: pathname === "/category/category",
            },
            {
              href: "/category/subcategory",
              label: "Subcategory",
              active: pathname === "/category/subcategory",
            }
          ],
        },
        {
          href: "/brand",
          label: "Brand",
          active: pathname.includes("/brand"),
          icon: Package2,
          submenus: [],
        },
        {
          href: "/products",
          label: "Products",
          active: pathname.includes("/products"),
          icon: Package2,
          submenus: [],
        },
        {
          href: "/coupon",
          label: "Coupon",
          active: pathname.includes("/coupon"),
          icon: TicketPercent,
          submenus: [],
        },
        {
          href: "/campaign",
          label: "Campaign",
          active: pathname.includes("/campaign"),
          icon: FlameKindling,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Pages",
      menus: [
        {
          href: "/banners",
          label: "Banners",
          active: pathname.includes("/banners"),
          icon: Images,
          submenus: [],
        },
        {
          href: "/blogs",
          label: "blogs",
          active: pathname.includes("/blogs"),
          icon: ScrollText,
          submenus: [],
        },
        {
          href: "/product-review",
          label: "Product Review",
          active: pathname.includes("/product-review"),
          icon: Star,
          submenus: [],
        },
      ],
    },
    
    
    
  ];
}
