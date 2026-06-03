import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  zTranslate?: number;
}

export const TiltCard = ({ children, className = "", zTranslate = 50 }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className={`relative ${className}`}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative z-10 rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
      >
        <div style={{ transform: `translateZ(${zTranslate}px)` }} className="h-full w-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
