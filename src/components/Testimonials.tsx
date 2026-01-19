import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const avatarImages = [
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=52",
  "https://i.pravatar.cc/150?img=20",
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

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        {t('testimonials.description')}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage
                  alt=""
                  src={avatarImages[index]}
                />
                <AvatarFallback>OM</AvatarFallback>
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
