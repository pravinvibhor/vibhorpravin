
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
    <div className="relative w-full max-w-[500px] h-[500px] hidden lg:block mx-auto">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {initiatives.map((initiative, index) => {
          const angleStart = startAngle + (index * (segmentAngle + gapAngle));
          const angleEnd = angleStart + segmentAngle;
          
          // Calculate the SVG arc path based on whether it's hovered or not
          const getPath = (isHovered: boolean) => {
            // Apply outward movement effect on hover (10-15px outward)
            const hoverOffset = isHovered ? 15 : 0;
            
            const currInnerRadius = innerRadius;
            const currOuterRadius = outerRadius + hoverOffset;
            
            const angleStartRad = (angleStart * Math.PI) / 180;
            const angleEndRad = (angleEnd * Math.PI) / 180;
            
            // Calculate midpoint angle for the outward movement direction
            const midAngleRad = (angleStartRad + angleEndRad) / 2;
            const offsetX = isHovered ? Math.cos(midAngleRad) * hoverOffset : 0;
            const offsetY = isHovered ? Math.sin(midAngleRad) * hoverOffset : 0;
            
            const x1 = centerX + currInnerRadius * Math.cos(angleStartRad) + offsetX;
            const y1 = centerY + currInnerRadius * Math.sin(angleStartRad) + offsetY;
            const x2 = centerX + currOuterRadius * Math.cos(angleStartRad) + offsetX;
            const y2 = centerY + currOuterRadius * Math.sin(angleStartRad) + offsetY;
            const x3 = centerX + currOuterRadius * Math.cos(angleEndRad) + offsetX;
            const y3 = centerY + currOuterRadius * Math.sin(angleEndRad) + offsetY;
            const x4 = centerX + currInnerRadius * Math.cos(angleEndRad) + offsetX;
            const y4 = centerY + currInnerRadius * Math.sin(angleEndRad) + offsetY;

            // Arc flags - using 0 for small arc, 1 for large arc if needed
            const arcSweep = segmentAngle > 180 ? 1 : 0;
            
            return [
              `M ${x1} ${y1}`, // Move to start point
              `L ${x2} ${y2}`, // Line to outer start
              `A ${currOuterRadius} ${currOuterRadius} 0 ${arcSweep} 1 ${x3} ${y3}`, // Arc to outer end
              `L ${x4} ${y4}`, // Line to inner end
              `A ${currInnerRadius} ${currInnerRadius} 0 ${arcSweep} 0 ${x1} ${y1}`, // Arc back to start
              'Z' // Close path
            ].join(' ');
          };

          // Calculate position for icon and text with hover effect
          const isHovered = hoveredInitiative === initiative.id;
          const iconAngle = (angleStart + angleEnd) / 2 * Math.PI / 180;
          const iconRadius = (innerRadius + outerRadius) / 2;
          const hoverOffset = isHovered ? 15 : 0;
          const offsetX = isHovered ? Math.cos(iconAngle) * hoverOffset : 0;
          const offsetY = isHovered ? Math.sin(iconAngle) * hoverOffset : 0;
          const iconX = centerX + iconRadius * Math.cos(iconAngle) + offsetX;
          const iconY = centerY + iconRadius * Math.sin(iconAngle) + offsetY;

          const IconComponent = initiative.icon;
          
          // Adjust text position and style for "Service Launch" to fit properly in the segment
          const isServiceLaunch = initiative.shortTitle === "Service Launch";
          const textClassName = `text-white ${isServiceLaunch ? 'text-xs' : 'text-sm'} font-medium text-center`;
          
          // Special positioning for "Service Launch" text
          const textX = isServiceLaunch ? iconX - 40 : iconX - 60;
          const textY = isServiceLaunch ? iconY - 10 : iconY - 5;
          const textWidth = isServiceLaunch ? 80 : 120;

          return (
            <g key={initiative.id} className="cursor-pointer">
              <motion.path
                d={getPath(isHovered)}
                fill={`url(#gradient-${initiative.id})`}
                stroke={isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.9, transformOrigin: `${centerX}px ${centerY}px` }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                }}
                whileHover={{ 
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                }}
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
                x={textX}
                y={textY}
                width={textWidth}
                height="40"
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center h-full">
                  <p className={textClassName}>
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
