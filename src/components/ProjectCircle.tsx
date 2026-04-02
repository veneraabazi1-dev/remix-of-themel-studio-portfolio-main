import { useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProjectCircleProps {
  slug: string;
  title: string;
  size?: "sm" | "md" | "lg";
  imageIndex?: number;
  imageSrc?: string;
  grayscale?: boolean;
}

const sizeClasses = {
  sm: "w-28 h-28 md:w-36 md:h-36",
  md: "w-36 h-36 md:w-48 md:h-48",
  lg: "w-44 h-44 md:w-56 md:h-56",
};

const bgTones = [
  "linear-gradient(145deg, rgba(28,28,28,0.96), rgba(58,58,58,0.78))",
  "linear-gradient(145deg, rgba(42,42,42,0.96), rgba(84,84,84,0.72))",
  "linear-gradient(145deg, rgba(24,24,24,0.96), rgba(66,66,66,0.7))",
  "linear-gradient(145deg, rgba(36,36,36,0.96), rgba(92,92,92,0.68))",
];

const ProjectCircle = ({
  slug,
  title,
  size = "md",
  imageIndex = 0,
  imageSrc,
  grayscale = false,
}: ProjectCircleProps) => {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();
  const dim = isMobile
    ? size === "sm"
      ? 124
      : size === "md"
        ? 164
        : 188
    : size === "sm"
      ? 144
      : size === "md"
        ? 192
        : 224;
  const ringOneDim = dim + (isMobile ? 24 : 34);
  const ringTwoDim = dim + (isMobile ? 46 : 66);
  const ringThreeDim = dim + (isMobile ? 68 : 98);

  return (
    <Link
      to={`/projekt/${slug}`}
      className="relative flex flex-col items-center justify-start group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <svg
          className={`absolute transition-all duration-700 ease-out ${
            hovered ? "opacity-100 scale-100 arc-rotate-slow" : "opacity-60 scale-[0.985]"
          }`}
          width={ringThreeDim}
          height={ringThreeDim}
          viewBox={`0 0 ${ringThreeDim} ${ringThreeDim}`}
        >
          <circle
            cx={ringThreeDim / 2}
            cy={ringThreeDim / 2}
            r={ringThreeDim / 2 - 2}
            fill="none"
            stroke="rgba(0,0,0,0.24)"
            strokeWidth="0.9"
            strokeDasharray="96 28 18 34"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className={`absolute transition-all duration-700 ease-out ${
            hovered ? "opacity-90 scale-100 arc-rotate-reverse-slow" : "opacity-45 scale-[0.99]"
          }`}
          width={ringTwoDim}
          height={ringTwoDim}
          viewBox={`0 0 ${ringTwoDim} ${ringTwoDim}`}
        >
          <circle
            cx={ringTwoDim / 2}
            cy={ringTwoDim / 2}
            r={ringTwoDim / 2 - 2}
            fill="none"
            stroke="rgba(0,0,0,0.28)"
            strokeWidth="0.9"
            strokeDasharray="132 30"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className={`absolute transition-all duration-500 ease-out ${
            hovered ? "opacity-100 scale-[1.02]" : "opacity-55 scale-100"
          }`}
          width={ringOneDim}
          height={ringOneDim}
          viewBox={`0 0 ${ringOneDim} ${ringOneDim}`}
        >
          <circle
            cx={ringOneDim / 2}
            cy={ringOneDim / 2}
            r={ringOneDim / 2 - 2}
            fill="none"
            stroke="rgba(0,0,0,0.32)"
            strokeWidth="0.8"
          />
        </svg>

        <div
          className={`${sizeClasses[size]} rounded-full overflow-hidden relative z-10 flex items-center justify-center transition-all duration-700 ease-out ${
            hovered ? "scale-[1.045] shadow-[0_20px_50px_rgba(0,0,0,0.16)]" : "scale-100"
          }`}
          style={{ background: bgTones[imageIndex % bgTones.length] }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className={`absolute inset-0 h-full w-full object-cover ${grayscale ? "grayscale" : ""}`}
            />
          ) : null}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_36%)]" />

          <div
            className={`absolute inset-[14%] rounded-full border border-white/15 transition-all duration-700 ease-out ${
              hovered ? "scale-[1.08] opacity-90" : "scale-100 opacity-55"
            }`}
          />
        </div>
      </div>

      <span
        className="relative z-10 mt-12 max-w-[180px] text-[#181818] text-[12px] md:text-[13px] font-bold tracking-[0.12em] uppercase text-center leading-tight font-display"
        style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif', fontWeight: 700 }}
      >
        {title}
      </span>
    </Link>
  );
};

export default ProjectCircle;
