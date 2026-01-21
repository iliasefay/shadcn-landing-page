import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              {t('hero.title1')}
            </span>{" "}
            {t('hero.title2')}
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-teal-500 to-primary text-transparent bg-clip-text">
              {t('hero.title3')}
            </span>{" "}
            {t('hero.title4')}
          </h2>
        </main>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          {t('hero.description')}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 rtl:md:space-x-reverse">
          <Button
            className="w-full md:w-auto"
            onClick={() => window.location.href = 'mailto:contact@integratedanalytics.com?subject=Free Consultation Request'}
          >{t('hero.cta_primary')}</Button>

          <a
            rel="noreferrer noopener"
            href="#services"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            {t('hero.cta_secondary')}
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
