
export interface ColorScheme {
  bgGradient: string;
  borderColor: string;
  glowColor: string;
  accentColor: string;
}

export const getColorScheme = (scheme: string): ColorScheme => {
  switch(scheme) {
    case "blue":
      return { 
        bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
        borderColor: "border-blue-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        accentColor: "text-blue-400"
      };
    case "purple":
      return { 
        bgGradient: "bg-gradient-to-br from-purple-900/80 to-purple-700/40",
        borderColor: "border-purple-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
        accentColor: "text-purple-400"
      };
    case "teal":
      return { 
        bgGradient: "bg-gradient-to-br from-teal-900/80 to-teal-700/40",
        borderColor: "border-teal-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(20,184,166,0.3)]",
        accentColor: "text-teal-400"
      };
    case "green":
      return { 
        bgGradient: "bg-gradient-to-br from-green-900/80 to-green-700/40",
        borderColor: "border-green-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
        accentColor: "text-green-400"
      };
    case "cyan":
      return { 
        bgGradient: "bg-gradient-to-br from-cyan-900/80 to-cyan-700/40",
        borderColor: "border-cyan-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
        accentColor: "text-cyan-400"
      };
    default:
      return { 
        bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
        borderColor: "border-blue-500/30", 
        glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        accentColor: "text-blue-400"
      };
  }
};
