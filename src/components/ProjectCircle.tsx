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
  sm: "aspect-square w-28 md:w-36",
  md: "aspect-square w-36 md:w-48",
  lg: "aspect-square w-44 md:w-56",
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
  return (
    <Link
      to={`/projekt/${slug}`}
      className="relative flex flex-col items-center justify-start group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className={`absolute h-[86%] w-[86%] rounded-full border transition-all duration-700 ease-out ${
              hovered ? "scale-[1.01]" : "scale-100"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.18)" }}
          />
          <div
            className={`h-[96%] w-[96%] rounded-full border transition-all duration-700 ease-out ${
              hovered ? "scale-[1.02]" : "scale-100"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.26)" }}
          />
          <div
            className={`absolute h-[106%] w-[106%] rounded-full border transition-all duration-700 ease-out ${
              hovered ? "scale-[1.035]" : "scale-100"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.2)" }}
          />
          <div
            className={`absolute h-[116%] w-[116%] rounded-full border transition-all duration-700 ease-out ${
              hovered ? "scale-[1.05] opacity-100" : "scale-100 opacity-70"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.16)" }}
          />
          <div
            className={`absolute h-[126%] w-[126%] rounded-full border opacity-0 transition-all duration-700 ease-out ${
              hovered ? "scale-[1.065] opacity-100" : "scale-100 opacity-0"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.12)" }}
          />
          <div
            className={`absolute h-[136%] w-[136%] rounded-full border opacity-0 transition-all duration-700 ease-out ${
              hovered ? "scale-[1.08] opacity-100" : "scale-100 opacity-0"
            }`}
            style={{ borderColor: "rgba(17, 17, 17, 0.1)" }}
          />
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
