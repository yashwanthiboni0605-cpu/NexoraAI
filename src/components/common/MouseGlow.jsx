import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 90,
        y: mouse.y - 90,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 25,
        mass: 0.4,
      }}
      className="pointer-events-none fixed z-10 h-[180px] w-[180px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 75%)",
        filter: "blur(30px)",
      }}
    />
  );
}