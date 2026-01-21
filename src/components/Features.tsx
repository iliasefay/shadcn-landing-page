import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

const images = [image4, image3, image];

export const Features = () => {
  const { t } = useTranslation();
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[];
  const badges = t('features.badges', { returnObjects: true }) as string[];

  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {t('features.title1')}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t('features.title2')}
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {badges.map((badge: string, index: number) => (
          <div key={index}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {badge}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>

            <CardContent>{feature.description}</CardContent>

            <CardFooter>
              <img
                src={images[index]}
                alt="About feature"
                className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
