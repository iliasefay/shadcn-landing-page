import { useTranslation } from "react-i18next";
import { Building2, Landmark, Factory, ShoppingBag, Plane, Heart } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  nameKey: string;
}

const sponsorData: SponsorProps[] = [
  { icon: <Landmark size={34} />, nameKey: "sponsors.banking" },
  { icon: <Building2 size={34} />, nameKey: "sponsors.government" },
  { icon: <Heart size={34} />, nameKey: "sponsors.healthcare" },
  { icon: <Plane size={34} />, nameKey: "sponsors.transportation" },
  { icon: <ShoppingBag size={34} />, nameKey: "sponsors.retail" },
  { icon: <Factory size={34} />, nameKey: "sponsors.manufacturing" },
];

export const Sponsors = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        {t('sponsors.title')}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsorData.map(({ icon, nameKey }: SponsorProps) => (
          <div
            key={nameKey}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{t(nameKey)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
