import { useTranslation } from "react-i18next";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ScrollToTop } from "../ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {t("accessibility.skipToMain", "Skip to main content")}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
