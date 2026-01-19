import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=68",
    name: "Sarah Al-Rashid",
    position: "Chief Executive Officer",
    description: "15+ years leading digital transformation initiatives across the Middle East and globally.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "David Chen",
    position: "Chief Technology Officer",
    description: "Expert in cloud architecture and enterprise systems with Fortune 500 experience.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Fatima Hassan",
    position: "VP of Data Science",
    description: "PhD in Machine Learning with expertise in predictive analytics and AI solutions.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "James Wilson",
    position: "Head of Cloud Solutions",
    description: "AWS and Azure certified architect specializing in hybrid cloud deployments.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Leadership{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Experienced professionals dedicated to driving your digital success with
        deep industry expertise and technical excellence.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
