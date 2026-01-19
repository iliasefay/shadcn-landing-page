import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const { t } = useTranslation();

  interface statsProps {
    quantity: string;
    descriptionKey: string;
  }

  const stats: statsProps[] = [
    { quantity: "500+", descriptionKey: "about.stats.clients" },
    { quantity: "15+", descriptionKey: "about.stats.experience" },
    { quantity: "99.9%", descriptionKey: "about.stats.uptime" },
    { quantity: "24/7", descriptionKey: "about.stats.support" },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, descriptionKey }: statsProps) => (
          <div
            key={descriptionKey}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{t(descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
