import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What industries does Integrated Analytics serve?",
    answer: "We serve a wide range of industries including banking and financial services, healthcare, government, retail, manufacturing, and transportation. Our solutions are tailored to meet the specific regulatory requirements and operational needs of each sector.",
    value: "item-1",
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer:
      "Project timelines vary based on scope and complexity. A basic analytics implementation may take 4-8 weeks, while comprehensive enterprise transformations can span 6-12 months. We provide detailed timelines during our discovery phase and use agile methodologies to deliver value incrementally.",
    value: "item-2",
  },
  {
    question:
      "Do you offer both cloud and on-premise solutions?",
    answer:
      "Yes, we offer flexible deployment options including public cloud (AWS, Azure, GCP), private cloud, on-premise, and hybrid configurations. We help you choose the best architecture based on your security requirements, compliance needs, and performance goals.",
    value: "item-3",
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive post-implementation support including 24/7 technical assistance, regular system health checks, performance optimization, user training, and dedicated account management. Our enterprise clients receive priority support with guaranteed response times.",
    value: "item-4",
  },
  {
    question:
      "How do you ensure data security and compliance?",
    answer:
      "Security is built into every solution we deliver. We follow industry best practices, implement encryption at rest and in transit, conduct regular security audits, and ensure compliance with standards like ISO 27001, SOC 2, GDPR, and industry-specific regulations such as HIPAA for healthcare and PCI-DSS for financial services.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#cta"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
