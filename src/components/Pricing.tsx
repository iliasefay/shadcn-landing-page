import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface PlanProps {
  title: string;
  price: string;
  suffix: string;
  description: string;
  cta: string;
  popular?: boolean;
  benefits: string[];
}

export const Pricing = () => {
  const { t } = useTranslation();
  const plans = t('pricing.plans', { returnObjects: true }) as PlanProps[];

  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {t('pricing.title1')}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          {t('pricing.title2')}{" "}
        </span>
        {t('pricing.title3')}
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {t('pricing.description')}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={
              plan.popular
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {plan.title}
                {plan.popular ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    {t('pricing.mostPopular')}
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.suffix}</span>
              </div>

              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className="w-full"
                onClick={() => window.location.href = `mailto:contact@integratedanalytics.com?subject=${encodeURIComponent(plan.title + ' Plan Inquiry')}`}
              >{plan.cta}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {plan.benefits.map((benefit: string, i: number) => (
                  <span
                    key={i}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ltr:ml-2 rtl:mr-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
