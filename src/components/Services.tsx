import { useTranslation } from "react-i18next";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

const icons = [<ChartIcon />, <WalletIcon />, <MagnifierIcon />];

export const Services = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {t('services.title1')}{" "}
            </span>
            {t('services.title2')}
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg md:text-xl mt-4 mb-8">
            {t('services.description')}
          </p>

          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icons[index]}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain mx-auto"
          alt="About services"
        />
      </div>
    </section>
  );
};
