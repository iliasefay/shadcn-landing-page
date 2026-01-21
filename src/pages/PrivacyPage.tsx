import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const sections = [
    {
      title: t("privacyPage.sections.introduction.title"),
      content: t("privacyPage.sections.introduction.content"),
    },
    {
      title: t("privacyPage.sections.dataCollection.title"),
      content: t("privacyPage.sections.dataCollection.content"),
    },
    {
      title: t("privacyPage.sections.dataUsage.title"),
      content: t("privacyPage.sections.dataUsage.content"),
    },
    {
      title: t("privacyPage.sections.dataSecurity.title"),
      content: t("privacyPage.sections.dataSecurity.content"),
    },
    {
      title: t("privacyPage.sections.cookies.title"),
      content: t("privacyPage.sections.cookies.content"),
    },
    {
      title: t("privacyPage.sections.thirdParty.title"),
      content: t("privacyPage.sections.thirdParty.content"),
    },
    {
      title: t("privacyPage.sections.userRights.title"),
      content: t("privacyPage.sections.userRights.content"),
    },
    {
      title: t("privacyPage.sections.updates.title"),
      content: t("privacyPage.sections.updates.content"),
    },
    {
      title: t("privacyPage.sections.contact.title"),
      content: t("privacyPage.sections.contact.content"),
    },
  ];

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              {t("privacyPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("privacyPage.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("privacyPage.hero.description")}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {t("privacyPage.lastUpdated")}: {t("privacyPage.updateDate")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">{index + 1}.</span>
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
