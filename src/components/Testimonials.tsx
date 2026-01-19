import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Ahmed Al-Mansoor",
    userName: "CTO, TechVentures",
    comment: "Integrated Analytics transformed our data infrastructure. Their team delivered a comprehensive BI solution that increased our decision-making speed by 40%.",
  },
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "Sarah Thompson",
    userName: "VP Operations, GlobalRetail",
    comment:
      "The cloud migration project was seamless. Zero downtime during transition and our infrastructure costs dropped by 35%. Exceptional professional service.",
  },

  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Mohammed Hassan",
    userName: "CEO, FinServe Holdings",
    comment:
      "Their cybersecurity solutions gave us peace of mind. The AI-powered fraud detection system has prevented millions in potential losses. Highly recommended for financial institutions.",
  },
  {
    image: "https://i.pravatar.cc/150?img=44",
    name: "Lisa Chen",
    userName: "Director of IT, HealthPlus",
    comment:
      "Integrated Analytics delivered our ERP implementation on time and within budget. The post-implementation support has been outstanding. A true technology partner.",
  },
  {
    image: "https://i.pravatar.cc/150?img=52",
    name: "Omar Abdullah",
    userName: "CIO, Government Services",
    comment:
      "Working with their team on our digital transformation initiative has been exceptional. They understand public sector requirements and deliver secure, compliant solutions.",
  },
  {
    image: "https://i.pravatar.cc/150?img=20",
    name: "Jennifer Martinez",
    userName: "Head of Analytics, LogiCorp",
    comment:
      "The predictive analytics platform they built has revolutionized our supply chain management. Real-time insights have improved our efficiency dramatically.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Trusted by
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Industry Leaders{" "}
        </span>
        Worldwide
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        See what our clients say about their digital transformation journey with Integrated Analytics
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
