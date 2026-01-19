import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Data Analytics & Insights",
    description:
      "Unlock the full potential of your data with advanced analytics, real-time reporting, and AI-powered business intelligence solutions.",
    icon: <ChartIcon />,
  },
  {
    title: "Enterprise Applications",
    description:
      "Streamline operations with custom ERP solutions, CRM integrations, and enterprise-grade applications tailored to your business needs.",
    icon: <WalletIcon />,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Modernize your IT infrastructure with secure cloud migration, hybrid solutions, and managed services for optimal performance.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Enterprise-Grade{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Comprehensive digital transformation services designed to accelerate
            your business growth and operational efficiency.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
