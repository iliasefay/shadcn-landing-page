import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";

export function CookieConsent() {
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 ${isRTL ? "rtl" : "ltr"}`}
        >
          <div className="container mx-auto">
            <div className="bg-background border rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t("cookies.title", "We use cookies")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "cookies.description",
                      "We use cookies to enhance your browsing experience and analyze our traffic."
                    )}{" "}
                    <Link
                      to="/privacy"
                      className="text-primary hover:underline"
                    >
                      {t("cookies.learnMore", "Learn more")}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={declineCookies}
                  className="flex-1 md:flex-initial"
                >
                  {t("cookies.decline", "Decline")}
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="flex-1 md:flex-initial"
                >
                  {t("cookies.accept", "Accept")}
                </Button>
              </div>
              <button
                onClick={declineCookies}
                className="absolute top-2 ltr:right-2 rtl:left-2 p-1 hover:bg-muted rounded-full md:hidden"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
