import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  image = "https://shadcn-landing-page.vercel.app/og-image.png",
  url,
  type = "website",
}: SEOProps) {
  const { t, i18n } = useTranslation();

  const siteTitle = t("seo.siteTitle", "Integrated Analytics");
  const defaultDescription = t(
    "seo.defaultDescription",
    "Empowering businesses with data analytics, cloud solutions, AI-powered insights, and enterprise applications."
  );

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : "ltr"} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
