import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Discovery & Assessment",
    description:
      "We analyze your current systems, data infrastructure, and business goals to identify opportunities for digital transformation.",
  },
  {
    icon: <MapIcon />,
    title: "Strategy & Planning",
    description:
      "Our experts design a tailored roadmap with clear milestones, KPIs, and implementation strategies aligned with your objectives.",
  },
  {
    icon: <PlaneIcon />,
    title: "Implementation",
    description:
      "We deploy solutions using agile methodologies, ensuring seamless integration with your existing systems and minimal disruption.",
  },
  {
    icon: <GiftIcon />,
    title: "Support & Optimization",
    description:
      "Continuous monitoring, 24/7 support, and ongoing optimization ensure your solutions deliver maximum value over time.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Approach{" "}
        </span>
        to Success
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A proven methodology that ensures successful digital transformation
        and measurable business outcomes for every client.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
