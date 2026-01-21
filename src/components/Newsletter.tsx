import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check } from "lucide-react";

export const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setIsSubmitted(true);
      setEmail("");
      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {t('newsletter.title1')}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {t('newsletter.title2')}
          </span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mt-4 mb-8">
          {t('newsletter.description')}
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            required
          />
          <Button type="submit">{t('newsletter.cta')}</Button>
        </form>

        {isSubmitted && (
          <div className="flex items-center justify-center gap-2 mt-4 text-green-600 dark:text-green-400">
            <Check className="h-5 w-5" />
            <p>{t('newsletter.successMessage')}</p>
          </div>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
