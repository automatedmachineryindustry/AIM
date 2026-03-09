import { useState, useEffect } from "react";

/**
 * Lightweight cursor-following glow for visual polish only.
 * Does not affect functionality or layout. pointer-events: none.
 */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
};

export default CursorGlow;
