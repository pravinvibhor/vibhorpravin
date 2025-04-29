import React from "react";
import { motion } from "framer-motion";
import { Initiative } from "@/data/initiativesData";

interface RadialSegmentsProps {
  initiatives: Initiative[];
  hoveredInitiative: number | null;
  setHoveredInitiative: (id: number | null) => void;
  onInitiativeClick: (id: number) => void;
}

const RadialSegments: React.FC<RadialSegmentsProps> = ({
  initiatives,
  hoveredInitiative,
  setHoveredInitiative,
  onInitiativeClick,
}) => {
  // Radial segment positioning calculations
  const centerX = 250;
  const centerY = 250;
  const innerRadius = 80;
  const outerRadius = 180;
  const segmentCount = initiatives.length;
  const gapAngle = 10; // Gap in degrees between segments
  const segmentAngle = (360 - (segmentCount * gapAngle)) / segmentCount;
  const startAngle = -90 - (segmentAngle / 2); // Start from top, adjusted for segment width

  return (
    <div className="relative w-full max-w-[500px] h-[500px] hidden lg:block mt-6 mx-auto">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {initiatives.map((initiative, index) => {
          const angleStart = startAngle + (index * (segmentAngle + gapAngle));
          const angleEnd = angleStart + segmentAngle;
          
          // Calculate the SVG arc path
          const angleStartRad = (angleStart * Math.PI) / 180;
          const angleEndRad = (angleEnd * Math.PI) / 180;
          
          const x1 = centerX + innerRadius * Math.cos(angleStartRad);
          const y1 = centerY + innerRadius * Math.sin(angleStartRad);
          const x2 = centerX + outerRadius * Math.cos(angleStartRad);
          const y2 = centerY + outerRadius * Math.sin(angleStartRad);
          const x3 = centerX + outerRadius * Math.cos(angleEndRad);
          const y3 = centerY + outerRadius * Math.sin(angleEndRad);
          const x4 = centerX + innerRadius * Math.cos(angleEndRad);
          const y4 = centerY + innerRadius * Math.sin(angleEndRad);

          // Arc flags - using 0 for small arc, 1 for large arc if needed
          const arcSweep = segmentAngle > 180 ? 1 : 0;
          
          const path = [
            `M ${x1} ${y1}`, // Move to start point
            `L ${x2} ${y2}`, // Line to outer start
            `A ${outerRadius} ${outerRadius} 0 ${arcSweep} 1 ${x3} ${y3}`, // Arc to outer end
            `L ${x4} ${y4}`, // Line to inner end
            `A ${innerRadius} ${innerRadius} 0 ${arcSweep} 0 ${x1} ${y1}`, // Arc back to start
            'Z' // Close path
          ].join(' ');

          // Calculate position for icon and text
          const iconAngle = (angleStart + angleEnd) / 2 * Math.PI / 180;
          const iconRadius = (innerRadius + outerRadius) / 2;
          const iconX = centerX + iconRadius * Math.cos(iconAngle);
          const iconY = centerY + iconRadius * Math.sin(iconAngle);

          const IconComponent = initiative.icon;

          return (
            <g key={initiative.id} className="cursor-pointer">
              <motion.path
                d={path}
                fill={`url(#gradient-${initiative.id})`}
                stroke={hoveredInitiative === initiative.id ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredInitiative(initiative.id)}
                onMouseLeave={() => setHoveredInitiative(null)}
                onClick={() => onInitiativeClick(initiative.id)}
                role="button"
                aria-label={`View details about ${initiative.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onInitiativeClick(initiative.id);
                  }
                }}
                className="neon-glow"
              />
              <defs>
                <linearGradient id={`gradient-${initiative.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={initiative.color} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={initiative.color} stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Icon */}
              <foreignObject
                x={iconX - 15}
                y={iconY - 40}
                width="30"
                height="30"
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center h-full">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </foreignObject>
              
              {/* Text */}
              <foreignObject
                x={iconX - 60}
                y={iconY - 5}
                width="120"
                height="40"
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center h-full">
                  <p className="text-white text-sm font-medium text-center">
                    {initiative.shortTitle}
                  </p>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default RadialSegments;
