import { useState } from "react";
import { useTranslation } from "react-i18next";
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
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    labelKey: "navbar.services",
  },
  {
    href: "#features",
    labelKey: "navbar.solutions",
  },
  {
    href: "#testimonials",
    labelKey: "navbar.clients",
  },
  {
    href: "#pricing",
    labelKey: "navbar.plans",
  },
  {
    href: "#faq",
    labelKey: "navbar.faq",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ltr:ml-2 rtl:mr-2 font-bold text-xl flex gap-1"
            >
              <LogoIcon />
              {t('navbar.brand')}
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden gap-1">
            <LanguageToggle />
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={isRTL ? "right" : "left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    {t('navbar.brand')}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, labelKey }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={labelKey}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {t(labelKey)}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="#cta"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    {t('footer.contact')}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {t(route.labelKey)}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="#cta"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              {t('footer.contact')}
            </a>

            <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
