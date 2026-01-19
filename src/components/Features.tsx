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

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Data Analytics & BI",
    description:
      "Transform raw data into actionable insights with our advanced analytics platforms, real-time dashboards, and predictive modeling solutions.",
    image: image4,
  },
  {
    title: "Cloud Solutions",
    description:
      "Migrate and optimize your infrastructure with our hybrid cloud solutions, managed services, and secure cloud architectures tailored to your needs.",
    image: image3,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of artificial intelligence to automate processes, detect patterns, and make data-driven decisions faster than ever before.",
    image: image,
  },
];

const featureList: string[] = [
  "Enterprise Applications",
  "Data Warehousing",
  "Cloud Migration",
  "Cybersecurity",
  "IoT Solutions",
  "ERP Systems",
  "API Integration",
  "Digital Transformation",
  "Managed Services",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Core Solutions
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
