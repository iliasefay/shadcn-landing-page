import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  MessageSquare,
} from "lucide-react";

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("contactPage.info.address.title"),
      details: [t("contactPage.info.address.line1"), t("contactPage.info.address.line2")],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contactPage.info.phone.title"),
      details: ["+966 11 XXX XXXX", "+966 11 XXX XXXX"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contactPage.info.email.title"),
      details: ["info@company.com", "support@company.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("contactPage.info.hours.title"),
      details: [t("contactPage.info.hours.weekdays"), t("contactPage.info.hours.weekend")],
    },
  ];

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              {t("contactPage.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("contactPage.hero.title1")}{" "}
              <span className="text-primary">{t("contactPage.hero.title2")}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("contactPage.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contactPage.form.title")}
              </h2>
              {formSubmitted ? (
                <Card className="border-2 border-green-500/50 bg-green-500/10">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("contactPage.form.successTitle")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("contactPage.form.successMessage")}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("contactPage.form.firstName")}
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder={t("contactPage.form.firstNamePlaceholder")}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            {t("contactPage.form.lastName")}
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder={t("contactPage.form.lastNamePlaceholder")}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contactPage.form.email")}
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder={t("contactPage.form.emailPlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contactPage.form.phone")}
                        </label>
                        <Input
                          type="tel"
                          placeholder={t("contactPage.form.phonePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contactPage.form.company")}
                        </label>
                        <Input
                          type="text"
                          placeholder={t("contactPage.form.companyPlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t("contactPage.form.message")}
                        </label>
                        <textarea
                          className="w-full min-h-[150px] px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                          placeholder={t("contactPage.form.messagePlaceholder")}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        {t("contactPage.form.submit")}
                        <Send className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contactPage.info.title")}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Locations */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">
                  {t("contactPage.offices.title")}
                </h3>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <Building2 className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-medium">
                          {t("contactPage.offices.riyadh")}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("contactPage.offices.headquarters")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <Building2 className="w-8 h-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium">
                          {t("contactPage.offices.jeddah")}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t("contactPage.offices.regionalOffice")}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {t("contactPage.mapPlaceholder")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
