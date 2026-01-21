import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Rocket,
  GraduationCap,
  Coffee,
  Laptop,
  Gift,
  ArrowRight,
} from "lucide-react";

export function CareersPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("careersPage.benefits.health.title"),
      description: t("careersPage.benefits.health.description"),
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: t("careersPage.benefits.learning.title"),
      description: t("careersPage.benefits.learning.description"),
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: t("careersPage.benefits.balance.title"),
      description: t("careersPage.benefits.balance.description"),
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: t("careersPage.benefits.remote.title"),
      description: t("careersPage.benefits.remote.description"),
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t("careersPage.benefits.growth.title"),
      description: t("careersPage.benefits.growth.description"),
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: t("careersPage.benefits.bonus.title"),
      description: t("careersPage.benefits.bonus.description"),
    },
  ];

  const jobs = [
    {
      title: t("careersPage.jobs.seniorDataEngineer.title"),
      department: t("careersPage.jobs.seniorDataEngineer.department"),
      location: t("careersPage.jobs.seniorDataEngineer.location"),
      type: t("careersPage.jobs.fullTime"),
    },
    {
      title: t("careersPage.jobs.cloudArchitect.title"),
      department: t("careersPage.jobs.cloudArchitect.department"),
      location: t("careersPage.jobs.cloudArchitect.location"),
      type: t("careersPage.jobs.fullTime"),
    },
    {
      title: t("careersPage.jobs.aiEngineer.title"),
      department: t("careersPage.jobs.aiEngineer.department"),
      location: t("careersPage.jobs.aiEngineer.location"),
      type: t("careersPage.jobs.fullTime"),
    },
    {
      title: t("careersPage.jobs.projectManager.title"),
      department: t("careersPage.jobs.projectManager.department"),
      location: t("careersPage.jobs.projectManager.location"),
      type: t("careersPage.jobs.fullTime"),
    },
    {
      title: t("careersPage.jobs.uiDesigner.title"),
      department: t("careersPage.jobs.uiDesigner.department"),
      location: t("careersPage.jobs.uiDesigner.location"),
      type: t("careersPage.jobs.fullTime"),
    },
    {
      title: t("careersPage.jobs.securityAnalyst.title"),
      department: t("careersPage.jobs.securityAnalyst.department"),
      location: t("careersPage.jobs.securityAnalyst.location"),
      type: t("careersPage.jobs.fullTime"),
    },
  ];

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              {t("careersPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("careersPage.hero.title1")}{" "}
              <span className="text-primary">{t("careersPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("careersPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t("careersPage.stats.employees")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">{t("careersPage.stats.nationalities")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">{t("careersPage.stats.women")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">{t("careersPage.stats.rating")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("careersPage.whyJoin.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("careersPage.whyJoin.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("careersPage.positions.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("careersPage.positions.description")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button>
                      {t("careersPage.positions.apply")}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("careersPage.cta.title")}
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                {t("careersPage.cta.description")}
              </p>
              <Button size="lg" variant="secondary">
                {t("careersPage.cta.button")}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
