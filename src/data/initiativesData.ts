
import { Book, Award, FileText, Globe, Rocket } from "lucide-react";

export interface InitiativeSlide {
  image: string;
  caption: string;
}

export interface Initiative {
  id: number;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  description: string;
  color: string;
  slides: InitiativeSlide[];
}

// Sample data for 5 initiatives
export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "India Creates Club",
    shortTitle: "Community",
    icon: Globe,
    description: "A community platform for tech creators to connect in their city, fostering collaboration and innovation across India. The platform has successfully created networks in multiple metropolitan areas.",
    color: "#9b87f5", // Purple
    slides: [
      {
        image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
        caption: "Building local tech communities across India"
      },
      {
        image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
        caption: "Connecting creators through meaningful events"
      }
    ]
  },
  {
    id: 2,
    title: "Tiffin Service in Dubai",
    shortTitle: "Food Service",
    icon: Award,
    description: "Launched a successful tiffin service for a restaurant in Dubai, securing 14 subscriptions in the first week of operation with innovative marketing and quality food delivery.",
    color: "#00b3ff", // Blue
    slides: [
      {
        image: "/lovable-uploads/c53dd021-1eff-41e8-8cdb-ebf7bef42d7b.png",
        caption: "Authentic homestyle meals delivered daily"
      },
      {
        image: "/lovable-uploads/c53dd021-1eff-41e8-8cdb-ebf7bef42d7b.png",
        caption: "Rapid growth with 14 subscriptions in first week"
      }
    ]
  },
  {
    id: 3,
    title: "Tata's Leather Strategy for D2C",
    shortTitle: "D2C Strategy",
    icon: FileText,
    description: "Developed comprehensive E-commerce and subscription Business Model for Tata's Direct-to-Consumer Venture, revolutionizing their approach to leather goods marketing.",
    color: "#F97316", // Orange
    slides: [
      {
        image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
        caption: "Transforming traditional retail into D2C powerhouse"
      },
      {
        image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
        caption: "Subscription model for premium leather goods"
      }
    ]
  },
  {
    id: 4,
    title: "Educational Workshops",
    shortTitle: "Education",
    icon: Book,
    description: "Conducted a series of educational workshops aimed at emerging entrepreneurs, focusing on sustainable business practices and innovative financing models.",
    color: "#0EA5E9", // Sky Blue
    slides: [
      {
        image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
        caption: "Empowering the next generation of entrepreneurs"
      },
      {
        image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
        caption: "Hands-on learning experiences for real-world application"
      }
    ]
  },
  {
    id: 5,
    title: "Tech Innovation Labs",
    shortTitle: "Innovation",
    icon: Rocket,
    description: "Established tech innovation labs in partnership with universities, providing resources and mentorship to student-led startups developing solutions for local challenges.",
    color: "#D946EF", // Magenta Pink
    slides: [
      {
        image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
        caption: "Bridging academic research with commercial applications"
      },
      {
        image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
        caption: "Supporting student entrepreneurs in bringing ideas to market"
      }
    ]
  }
];
