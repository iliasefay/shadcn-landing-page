import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

// Generate initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const HeroCards = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[600px] xl:w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[280px] xl:w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="bg-primary">
            <AvatarFallback className="text-white font-semibold">
              {getInitials(t('heroCards.testimonial_name'))}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">{t('heroCards.testimonial_name')}</CardTitle>
            <CardDescription>{t('heroCards.testimonial_title')}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>{t('heroCards.testimonial_content')}</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-0 xl:right-[20px] top-4 w-64 xl:w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="absolute -top-12 rounded-full w-24 h-24 bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {getInitials(t('heroCards.team_name'))}
            </span>
          </div>
          <CardTitle className="text-center">{t('heroCards.team_name')}</CardTitle>
          <CardDescription className="font-normal text-primary">
            {t('heroCards.team_title')}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>{t('heroCards.team_description')}</p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/intikianalytics"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://linkedin.com/company/integrated-analytics"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-0 xl:left-[50px] w-64 xl:w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            {t('heroCards.pricing_title')}
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              {t('heroCards.pricing_badge')}
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">{t('heroCards.pricing_type')}</span>
            <span className="text-muted-foreground"> {t('heroCards.pricing_suffix')}</span>
          </div>

          <CardDescription>
            {t('heroCards.pricing_description')}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            className="w-full"
            onClick={() => window.location.href = 'mailto:contact@integratedanalytics.com?subject=Quote Request'}
          >{t('heroCards.pricing_cta')}</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {(t('heroCards.pricing_benefits', { returnObjects: true }) as string[]).map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-success" />{" "}
                  <h3 className="ltr:ml-2 rtl:mr-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[280px] xl:w-[350px] right-0 xl:-right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>{t('heroCards.service_title')}</CardTitle>
            <CardDescription className="text-md mt-2">
              {t('heroCards.service_description')}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
