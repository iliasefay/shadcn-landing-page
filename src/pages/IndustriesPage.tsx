import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Wifi,
  ArrowRight,
} from "lucide-react";
import { Cta } from "@/components/Cta";

export function IndustriesPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const industries = [
    {
      id: "banking",
      icon: <Landmark className="w-12 h-12" />,
      title: t("industriesPage.industries.banking.title"),
      description: t("industriesPage.industries.banking.description"),
      solutions: t("industriesPage.industries.banking.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "government",
      icon: <Building className="w-12 h-12" />,
      title: t("industriesPage.industries.government.title"),
      description: t("industriesPage.industries.government.description"),
      solutions: t("industriesPage.industries.government.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "healthcare",
      icon: <HeartPulse className="w-12 h-12" />,
      title: t("industriesPage.industries.healthcare.title"),
      description: t("industriesPage.industries.healthcare.description"),
      solutions: t("industriesPage.industries.healthcare.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "retail",
      icon: <ShoppingCart className="w-12 h-12" />,
      title: t("industriesPage.industries.retail.title"),
      description: t("industriesPage.industries.retail.description"),
      solutions: t("industriesPage.industries.retail.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "manufacturing",
      icon: <Factory className="w-12 h-12" />,
      title: t("industriesPage.industries.manufacturing.title"),
      description: t("industriesPage.industries.manufacturing.description"),
      solutions: t("industriesPage.industries.manufacturing.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "transportation",
      icon: <Truck className="w-12 h-12" />,
      title: t("industriesPage.industries.transportation.title"),
      description: t("industriesPage.industries.transportation.description"),
      solutions: t("industriesPage.industries.transportation.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "education",
      icon: <GraduationCap className="w-12 h-12" />,
      title: t("industriesPage.industries.education.title"),
      description: t("industriesPage.industries.education.description"),
      solutions: t("industriesPage.industries.education.solutions", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "telecom",
      icon: <Wifi className="w-12 h-12" />,
      title: t("industriesPage.industries.telecom.title"),
      description: t("industriesPage.industries.telecom.description"),
      solutions: t("industriesPage.industries.telecom.solutions", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              {t("industriesPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("industriesPage.hero.title1")}{" "}
              <span className="text-primary">
                {t("industriesPage.hero.title2")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("industriesPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {Array.isArray(industry.solutions) &&
                      industry.solutions.slice(0, 3).map((solution, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="mr-2 mb-2"
                        >
                          {solution}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("industriesPage.expertise.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("industriesPage.expertise.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-medium mb-2">
                {t("industriesPage.expertise.years")}
              </div>
              <p className="text-muted-foreground">
                {t("industriesPage.expertise.yearsDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">8</div>
              <div className="text-lg font-medium mb-2">
                {t("industriesPage.expertise.sectors")}
              </div>
              <p className="text-muted-foreground">
                {t("industriesPage.expertise.sectorsDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-lg font-medium mb-2">
                {t("industriesPage.expertise.clients")}
              </div>
              <p className="text-muted-foreground">
                {t("industriesPage.expertise.clientsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("industriesPage.cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("industriesPage.cta.description")}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                {t("industriesPage.cta.button")}
                <ArrowRight
                  className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}
