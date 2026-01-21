import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className={`min-h-[80vh] flex items-center justify-center ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold text-muted-foreground/20 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-20 h-20 md:w-28 md:h-28 text-primary/60" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("notFound.title", "Page Not Found")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            {t("notFound.description", "The page you're looking for doesn't exist or has been moved.")}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                {t("notFound.home", "Back to Home")}
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
              {t("notFound.goBack", "Go Back")}
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              {t("notFound.helpfulLinks", "Helpful Links")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-primary hover:underline">
                {t("navbar.about", "About")}
              </Link>
              <Link to="/services" className="text-primary hover:underline">
                {t("navbar.services", "Services")}
              </Link>
              <Link to="/contact" className="text-primary hover:underline">
                {t("navbar.contact", "Contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
