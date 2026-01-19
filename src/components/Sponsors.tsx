import { Building2, Landmark, Factory, ShoppingBag, Plane, Heart } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Landmark size={34} />,
    name: "Banking",
  },
  {
    icon: <Building2 size={34} />,
    name: "Government",
  },
  {
    icon: <Heart size={34} />,
    name: "Healthcare",
  },
  {
    icon: <Plane size={34} />,
    name: "Transportation",
  },
  {
    icon: <ShoppingBag size={34} />,
    name: "Retail",
  },
  {
    icon: <Factory size={34} />,
    name: "Manufacturing",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Trusted Across Industries
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
