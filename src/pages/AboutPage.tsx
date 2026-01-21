import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  Award,
  Rocket,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
// import { Team } from "@/components/Team";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SEO } from "@/components/SEO";

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t("aboutPage.values.innovation.title"),
      description: t("aboutPage.values.innovation.description"),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("aboutPage.values.excellence.title"),
      description: t("aboutPage.values.excellence.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("aboutPage.values.collaboration.title"),
      description: t("aboutPage.values.collaboration.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("aboutPage.values.integrity.title"),
      description: t("aboutPage.values.integrity.description"),
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t("aboutPage.values.agility.title"),
      description: t("aboutPage.values.agility.description"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("aboutPage.values.commitment.title"),
      description: t("aboutPage.values.commitment.description"),
    },
  ];

  const milestones = [
    { year: "2009", event: t("aboutPage.milestones.founded") },
    { year: "2012", event: t("aboutPage.milestones.expansion") },
    { year: "2015", event: t("aboutPage.milestones.cloud") },
    { year: "2018", event: t("aboutPage.milestones.ai") },
    { year: "2021", event: t("aboutPage.milestones.regional") },
    { year: "2024", event: t("aboutPage.milestones.enterprise") },
  ];

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      <SEO
        title={t("aboutPage.seo.title", "About Us")}
        description={t("aboutPage.seo.description", "Learn about our journey, mission, and the values that drive us to deliver exceptional digital transformation solutions.")}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              {t("aboutPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("aboutPage.hero.title1")}{" "}
              <span className="text-primary">{t("aboutPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("aboutPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-muted-foreground">
                {t("aboutPage.stats.clients")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-muted-foreground">
                {t("aboutPage.stats.experience")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-muted-foreground">
                {t("aboutPage.stats.projects")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-muted-foreground">
                {t("aboutPage.stats.experts")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {t("aboutPage.vision.title")}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutPage.vision.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {t("aboutPage.mission.title")}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutPage.mission.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("aboutPage.story.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("aboutPage.story.subtitle")}
              </p>
            </div>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutPage.story.paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutPage.story.paragraph2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("aboutPage.story.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("aboutPage.timeline.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("aboutPage.timeline.subtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0
                        ? isRTL
                          ? "text-left pl-8"
                          : "text-right pr-8"
                        : isRTL
                        ? "text-right pr-8"
                        : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-muted-foreground">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("aboutPage.values.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("aboutPage.values.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutPage.values.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Hidden for now */}
      {/* <Team /> */}
    </div>
  );
}
