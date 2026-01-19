import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamImages = [
  "https://i.pravatar.cc/150?img=68",
  "https://i.pravatar.cc/150?img=60",
  "https://i.pravatar.cc/150?img=36",
  "https://i.pravatar.cc/150?img=17",
];

export const Team = () => {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true }) as { name: string; position: string }[];

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t('team.title1')}{" "}
        </span>
        {t('team.title2')}
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        {t('team.description')}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {members.map((member, index) => (
          <Card
            key={index}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={teamImages[index]}
                alt={`${member.name} ${member.position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{member.name}</CardTitle>
              <CardDescription className="text-primary">
                {member.position}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <a
                rel="noreferrer noopener"
                href="#"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <span className="sr-only">LinkedIn icon</span>
                <Linkedin size="20" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
