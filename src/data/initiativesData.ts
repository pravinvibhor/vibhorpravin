
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
  link?: string;
}

// Sample data for 5 initiatives
export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "India Creates Club",
    shortTitle: "Product Prototype",
    icon: Globe,
    description: "Built a platform to address tech peer discovery gap in Indian metropolitan cities. The platform is a test to validate hypothesis on building tech ecosystems via showcase & community.",
    color: "#9b87f5", // Purple
    slides: [
      {
        image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
        caption: "Building local tech communities within cities"
      },
      {
        image: "/lovable-uploads/e012ccc2-f1ce-474b-b871-1833836997c6.png",
        caption: "Built the project from concept to a functional prototype"
      }
    ],
    link: "https://indiacreates.club"
  },
  {
    id: 2,
    title: "Tiffin Service in Dubai",
    shortTitle: "Service Launch",
    icon: Award,
    description: "Launched a successful tiffin service for a restaurant in Dubai assessing the market and its demand for their offerings, and implemented strategy and pricing for quality meal plans.",
    color: "#00b3ff", // Blue
    slides: [
      {
        image: "/lovable-uploads/c53dd021-1eff-41e8-8cdb-ebf7bef42d7b.png",
        caption: "Authentic homestyle meals delivered daily"
      },
      {
        image: "/lovable-uploads/bb2307fc-f358-4c9a-82cf-6b1afecae134.png",
        caption: "Rapid growth with 14 subscriptions in first week"
      }
    ]
  },
  {
    id: 3,
    title: "Tata's Leather Strategy for D2C",
    shortTitle: "D2C Strategy",
    icon: FileText,
    description: "Developed comprehensive E-commerce and subscription Business Model, in Tata's larger approach to Direct-to-Consumer venture, for their leather vertical.",
    color: "#F97316", // Orange
    slides: [
      {
        image: "/lovable-uploads/7ab8d295-7a41-4ab8-ae07-81f3d64eaa4c.png",
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
    title: "Education",
    shortTitle: "Education",
    icon: Book,
    description: "My journey through Engineering, MBA, campus engagement and various internships built a foundation for practical business leadership",
    color: "#0EA5E9", // Sky Blue
    slides: [
      {
        image: "/lovable-uploads/57e789a0-b842-4841-b75b-fe95e07a06f2.png",
        caption: "MBA from IMT Dubai and Ghaziabad, as part of Dual Country Program"
      },
      {
        image: "/lovable-uploads/ee9c608e-46c2-4ed9-8201-3700510af675.png",
        caption: "Bachelors in Civil Engineering"
      }
    ]
  },
  {
    id: 5,
    title: "First step in SaaS GTM",
    shortTitle: "Bootstrap start-up",
    icon: Rocket,
    description: "Led Customer Success at an Ed-Tech SaaS start-up securing partnerships & driving sales for over 5 months",
    color: "#D946EF", // Magenta Pink
    slides: [
      {
        image: "/lovable-uploads/87ada3b7-f8a7-4dd3-97c1-3f2128da5388.png",
        caption: "Was part of Cerebry to setup Customer Success department as its lead"
      },
      {
        image: "/lovable-uploads/2cf8ac9a-caf4-4032-8810-75ece424f19b.png",
        caption: "The early stage start-up gave hands-on learning in a new sector"
      }
    ]
  }
];
