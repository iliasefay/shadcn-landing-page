import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Generate initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Brand colors for avatar backgrounds
const avatarColors = [
  "bg-primary",
  "bg-teal-600",
  "bg-blue-600",
  "bg-primary/80",
  "bg-teal-500",
  "bg-blue-500",
];

export const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as { name: string; username: string; comment: string }[];

  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        {t('testimonials.title1')}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          {t('testimonials.title2')}{" "}
        </span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground pt-4 pb-8">
        {t('testimonials.description')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className={avatarColors[index % avatarColors.length]}>
                <AvatarFallback className="text-white font-semibold">
                  {getInitials(testimonial.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.username}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{testimonial.comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
