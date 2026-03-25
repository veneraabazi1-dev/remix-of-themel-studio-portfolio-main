import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCircleProps {
  slug: string;
  title: string;
  size?: "sm" | "md" | "lg";
  imageIndex?: number;
}

const sizeClasses = {
  sm: "w-28 h-28 md:w-36 md:h-36",
  md: "w-36 h-36 md:w-48 md:h-48",
  lg: "w-44 h-44 md:w-56 md:h-56",
};

// Deterministic placeholder colors based on index
const bgTones = [
  "hsl(0 0% 22%)",
  "hsl(0 0% 18%)",
  "hsl(0 0% 25%)",
  "hsl(0 0% 15%)",
];

const ProjectCircle = ({
  slug,
  title,
  size = "md",
  imageIndex = 0,
}: ProjectCircleProps) => {
  const [hovered, setHovered] = useState(false);
  const dim = size === "sm" ? 144 : size === "md" ? 192 : 224;
  const outerDim = dim + 24;
  const arcDim = dim + 40;

  return (
    <Link
      to={`/projekt/${slug}`}
      className="relative flex items-center justify-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer arc ring */}
      <svg
        className={`absolute transition-opacity duration-700 ${
          hovered ? "opacity-100 arc-rotate" : "opacity-0"
        }`}
        width={arcDim}
        height={arcDim}
        viewBox={`0 0 ${arcDim} ${arcDim}`}
      >
        <circle
          cx={arcDim / 2}
          cy={arcDim / 2}
          r={arcDim / 2 - 2}
          fill="none"
          className="ring-stroke"
          strokeWidth="0.5"
          strokeDasharray="40 80"
        />
      </svg>

      {/* Inner ring */}
      <svg
        className={`absolute transition-opacity duration-500 ${
          hovered ? "opacity-60" : "opacity-20"
        }`}
        width={outerDim}
        height={outerDim}
        viewBox={`0 0 ${outerDim} ${outerDim}`}
      >
        <circle
          cx={outerDim / 2}
          cy={outerDim / 2}
          r={outerDim / 2 - 2}
          fill="none"
          className="ring-stroke"
          strokeWidth="0.5"
        />
      </svg>

      {/* Circle with image placeholder */}
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden relative flex items-center justify-center transition-transform duration-500 ${
          hovered ? "scale-105" : "scale-100"
        }`}
        style={{ backgroundColor: bgTones[imageIndex % bgTones.length] }}
      >
        {/* Geometric pattern as placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div
            className="w-3/4 h-3/4 border border-foreground/20 rounded-full"
          />
        </div>

        {/* Title overlay */}
        <span className="relative z-10 text-foreground text-[9px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-center px-4 leading-tight">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCircle;
