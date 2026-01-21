import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Cloud,
  Brain,
  Building2,
  Shield,
  Smartphone,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Cta } from "@/components/Cta";

export function ServicesPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const services = [
    {
      id: "data-analytics",
      icon: <BarChart3 className="w-10 h-10" />,
      title: t("servicesPage.services.dataAnalytics.title"),
      description: t("servicesPage.services.dataAnalytics.description"),
      features: t("servicesPage.services.dataAnalytics.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "cloud-solutions",
      icon: <Cloud className="w-10 h-10" />,
      title: t("servicesPage.services.cloud.title"),
      description: t("servicesPage.services.cloud.description"),
      features: t("servicesPage.services.cloud.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "ai-ml",
      icon: <Brain className="w-10 h-10" />,
      title: t("servicesPage.services.ai.title"),
      description: t("servicesPage.services.ai.description"),
      features: t("servicesPage.services.ai.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "enterprise-apps",
      icon: <Building2 className="w-10 h-10" />,
      title: t("servicesPage.services.enterprise.title"),
      description: t("servicesPage.services.enterprise.description"),
      features: t("servicesPage.services.enterprise.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "cybersecurity",
      icon: <Shield className="w-10 h-10" />,
      title: t("servicesPage.services.cybersecurity.title"),
      description: t("servicesPage.services.cybersecurity.description"),
      features: t("servicesPage.services.cybersecurity.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "mobility",
      icon: <Smartphone className="w-10 h-10" />,
      title: t("servicesPage.services.mobility.title"),
      description: t("servicesPage.services.mobility.description"),
      features: t("servicesPage.services.mobility.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      id: "infrastructure",
      icon: <Cpu className="w-10 h-10" />,
      title: t("servicesPage.services.infrastructure.title"),
      description: t("servicesPage.services.infrastructure.description"),
      features: t("servicesPage.services.infrastructure.features", {
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
              {t("servicesPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("servicesPage.hero.title1")}{" "}
              <span className="text-primary">
                {t("servicesPage.hero.title2")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("servicesPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-background transition-colors text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary mb-2">
                  {service.icon}
                </div>
                <span className="text-sm font-medium">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {Array.isArray(service.features) &&
                    service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">
                    {t("servicesPage.learnMore")}
                    <ArrowRight
                      className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                    />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {t("servicesPage.whyChoose")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          98%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("servicesPage.satisfaction")}
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          24/7
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("servicesPage.support")}
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          100+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("servicesPage.implementations")}
                        </div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <div className="text-3xl font-bold text-primary mb-1">
                          15+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("servicesPage.yearsExperience")}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
