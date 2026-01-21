import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            to="/"
            className="font-bold text-xl flex gap-1"
          >
            <LogoIcon />
            {t('navbar.brand')}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{t('footer.followUs')}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://linkedin.com/company/integrated-analytics"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.linkedin')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/intikianalytics"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.twitter')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://youtube.com/@integratedanalytics"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.youtube')}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{t('footer.services')}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.dataAnalytics')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.cloudSolutions')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.enterpriseApps')}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{t('footer.company')}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.aboutUs')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.ourTeam')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.caseStudies')}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{t('footer.resources')}</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.faq')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.contact')}
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#newsletter"
              className="opacity-60 hover:opacity-100"
            >
              {t('footer.newsletter')}
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>{t('footer.copyright')}</h3>
      </section>
    </footer>
  );
};
