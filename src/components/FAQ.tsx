import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {t('faq.title1')}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t('faq.title2')}
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-start">
              {item.question}
            </AccordionTrigger>

            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        {t('faq.stillQuestions')}{" "}
        <a
          rel="noreferrer noopener"
          href="#cta"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          {t('faq.contactUs')}
        </a>
      </h3>
    </section>
  );
};
