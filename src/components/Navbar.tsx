import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import i18n from "i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./LanguageToggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  labelKey: string;
  isExternal?: boolean;
}

const routeList: RouteProps[] = [
  {
    href: "/about",
    labelKey: "navbar.about",
  },
  {
    href: "/services",
    labelKey: "navbar.services",
  },
  {
    href: "/industries",
    labelKey: "navbar.industries",
  },
  {
    href: "/careers",
    labelKey: "navbar.careers",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-full max-w-full flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ltr:ml-2 rtl:mr-2 font-bold text-xl flex gap-1"
            >
              <LogoIcon />
              {t("navbar.brand")}
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden gap-1">
            <LanguageToggle />
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                <Menu
                  className="flex md:hidden h-6 w-6"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={isRTL ? "right" : "left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    {t("navbar.brand")}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, labelKey }: RouteProps) => (
                    <Link
                      key={labelKey}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={`${buttonVariants({ variant: "ghost" })} ${
                        isActive(href) ? "bg-muted" : ""
                      }`}
                    >
                      {t(labelKey)}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    {t("navbar.contact")}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })} ${isActive(route.href) ? "bg-muted" : ""}`}
              >
                {t(route.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Link
              to="/contact"
              className={`border ${buttonVariants({ variant: "secondary" })} ${
                isActive("/contact") ? "bg-muted" : ""
              }`}
            >
              {t("navbar.contact")}
            </Link>

            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
