
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  logo?: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Product Management Certification",
      organization: "Product School",
      date: "2023"
    },
    {
      id: 2,
      name: "Revenue Operations Certification",
      organization: "HubSpot Academy",
      date: "2023"
    },
    {
      id: 3,
      name: "Customer Success Management",
      organization: "SuccessCOACH",
      date: "2022"
    },
    {
      id: 4,
      name: "Digital Marketing Specialist",
      organization: "Google Digital Garage",
      date: "2022"
    },
    {
      id: 5, 
      name: "Data Analytics Fundamentals",
      organization: "IBM",
      date: "2021"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20" id="certifications">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Professional <span className="text-neon">Certifications</span>
          </h2>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {certifications.map((cert, index) => (
              <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="glass-card h-52 flex flex-col justify-center hover:neon-glow transition-all duration-300">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      {cert.logo && (
                        <img src={cert.logo} alt={cert.organization} className="h-10 mb-4 object-contain" />
                      )}
                      <div>
                        <h3 className="text-xl font-medium mb-2 text-white">{cert.name}</h3>
                        <p className="text-white/60 text-sm">{cert.organization}</p>
                        <p className="text-neon/80 text-xs mt-2">{cert.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="relative static left-0 right-0 bg-background/10 border-neon/30 hover:bg-neon/20 text-white" />
            <CarouselNext className="relative static left-0 right-0 bg-background/10 border-neon/30 hover:bg-neon/20 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CertificationsSection;
