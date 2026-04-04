import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const textTarget = target.closest("[data-cursor-text]") as HTMLElement | null;
      const textLikeTarget = target.closest("p, span, h1, h2, h3, h4, h5, h6, a, button, li, label") as HTMLElement | null;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        Boolean(textTarget) ||
        Boolean(textLikeTarget)
      ) {
        setExpanded(true);
      }
    };

    const handleOut = () => {
      setExpanded(false);
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
      className={`custom-cursor ${expanded ? "expanded" : ""}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default CustomCursor;
