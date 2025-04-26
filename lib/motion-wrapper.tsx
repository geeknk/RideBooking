"use client";

import React from "react";

// Create a simple motion component wrapper for animation
interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
}

export const motion = {
  div: ({
    children,
    initial,
    animate,
    exit,
    transition,
    variants,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    className,
    ...props
  }: MotionProps) => {
    return (
      <div
        className={`transition-all duration-300 ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  },
};