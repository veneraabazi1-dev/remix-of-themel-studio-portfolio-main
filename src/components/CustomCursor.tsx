import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [textHover, setTextHover] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const textTarget = target.closest("[data-cursor-text]") as HTMLElement | null;

      setTextHover(Boolean(textTarget));

      if (
        target.closest("a") ||
        target.closest("button") ||
        Boolean(textTarget) ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "P"
      ) {
        setExpanded(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest("[data-cursor-text]")) return;

      setExpanded(false);
      setTextHover(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor ${expanded ? "expanded" : ""} ${textHover ? "text-hover" : ""}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default CustomCursor;
