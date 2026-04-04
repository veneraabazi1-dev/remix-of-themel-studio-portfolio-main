import { useState, type CSSProperties } from "react";
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
  "linear-gradient(150deg, rgba(32,32,32,0.96), rgba(78,78,78,0.72))",
  "linear-gradient(150deg, rgba(40,40,40,0.96), rgba(88,88,88,0.68))",
  "linear-gradient(150deg, rgba(26,26,26,0.96), rgba(70,70,70,0.66))",
  "linear-gradient(150deg, rgba(34,34,34,0.96), rgba(94,94,94,0.64))",
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
  const ringInnerDim = dim + (isMobile ? 22 : 28);
  const ringOuterDim = dim + (isMobile ? 42 : 54);
  const orbitInnerStyle = { "--orbit-start": "14deg" } as CSSProperties;
  const orbitOuterStyle = { "--orbit-start": "-22deg" } as CSSProperties;

  return (
    <Link
      to={`/projekt/${slug}`}
      className="relative flex flex-col items-center justify-start group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <div
          className={`absolute transition-all duration-700 ${
            hovered
              ? "orbit-arc-reverse opacity-80 scale-[1.01]"
              : "opacity-40 scale-[0.992]"
          }`}
          style={{
            ...orbitOuterStyle,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <svg
            width={ringOuterDim}
            height={ringOuterDim}
            viewBox={`0 0 ${ringOuterDim} ${ringOuterDim}`}
          >
            <circle
              cx={ringOuterDim / 2}
              cy={ringOuterDim / 2}
              r={ringOuterDim / 2 - 2}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.95"
              strokeDasharray="30 20"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          className={`absolute transition-all duration-700 ${
            hovered
              ? "orbit-arc-forward opacity-95 scale-[1.02]"
              : "opacity-55 scale-100"
          }`}
          style={{
            ...orbitInnerStyle,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <svg
            width={ringInnerDim}
            height={ringInnerDim}
            viewBox={`0 0 ${ringInnerDim} ${ringInnerDim}`}
          >
            <circle
              cx={ringInnerDim / 2}
              cy={ringInnerDim / 2}
              r={ringInnerDim / 2 - 2}
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="0.8"
              strokeDasharray="18 16"
              strokeDashoffset="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          className={`${sizeClasses[size]} relative z-10 flex items-center justify-center overflow-hidden rounded-full transition-all duration-700 ease-out ${
            hovered
              ? "scale-[1.035] shadow-[0_22px_48px_rgba(0,0,0,0.14)]"
              : "scale-100 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
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

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_72%_72%,rgba(255,255,255,0.06),transparent_38%)]" />

          <div
            className={`absolute inset-[13%] rounded-full border border-white/12 transition-all duration-700 ease-out ${
              hovered ? "scale-[1.05] opacity-85" : "scale-100 opacity-50"
            }`}
          />
        </div>
      </div>

      <span
        className="relative z-10 mt-10 max-w-[180px] text-[12px] font-bold uppercase leading-tight tracking-[0.12em] text-[#1f1f1f] md:text-[13px] font-display"
        style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
      >
        {title}
      </span>
    </Link>
  );
};

export default ProjectCircle;
